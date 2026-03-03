import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User, { UserRole, UserStatus } from "@/models/User";
import { hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const { name, email, password, role, districtId, documents } = body;

        // Validate request
        if (!name || !email || !password || !role) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password);

        // Status depends on role. Kazi needs approval.
        let status = UserStatus.APPROVED;
        if (role === UserRole.KAZI) {
            status = UserStatus.PENDING;
        }

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
            status,
            districtId: districtId || null,
            documents: documents || [],
        });

        await newUser.save();

        return NextResponse.json(
            { message: "User registered successfully", userId: newUser._id },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
