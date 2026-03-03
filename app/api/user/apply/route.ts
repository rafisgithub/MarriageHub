import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import MarriageApplication from "@/models/MarriageApplication";

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const { husbandInfo, wifeInfo, kaziId, documents } = body;

        if (!husbandInfo || !wifeInfo || !kaziId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const application = new MarriageApplication({
            husbandInfo,
            wifeInfo,
            kaziId,
            documents: documents || [],
        });

        await application.save();

        return NextResponse.json(
            { message: "Application submitted successfully", applicationId: application._id },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
