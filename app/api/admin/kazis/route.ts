import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User, { UserRole } from "@/models/User";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function GET(req: Request) {
    try {
        // Basic auth check
        const token = req.headers.get('cookie')?.split('token=')[1]?.split(';')[0];
        if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        if (payload.role !== UserRole.ADMIN) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        await connectToDatabase();
        // Fetch all Kazis
        const kazis = await User.find({ role: UserRole.KAZI }).populate("districtId");

        return NextResponse.json({ kazis }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
