import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User, { UserRole, UserStatus } from "@/models/User";
import { verifyPassword, generateToken } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const isMatch = await verifyPassword(password, user.password!);
        if (!isMatch) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Role specific status check.
        // Suspended users cannot login
        if (user.status === UserStatus.SUSPENDED) {
            return NextResponse.json({ error: "Account suspended. Please contact admin." }, { status: 403 });
        }

        // Requirements: "Account status remains 'pending' until approved... Prevent Kazi login if status != approved"
        if (user.role === UserRole.KAZI && user.status !== UserStatus.APPROVED) {
            return NextResponse.json({ error: "Account pending approval from Jela Registry Office" }, { status: 403 });
        }

        const token = generateToken({
            userId: user._id,
            role: user.role,
            status: user.status,
        });

        const response = NextResponse.json({ message: "Login successful", role: user.role }, { status: 200 });

        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
