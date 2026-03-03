import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const file = data.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "marriage_hub_docs" },
                (error, result) => {
                    if (error) {
                        reject(NextResponse.json({ error: error.message }, { status: 500 }));
                    } else {
                        resolve(NextResponse.json({ url: result?.secure_url }, { status: 200 }));
                    }
                }
            );
            uploadStream.end(buffer);
        });
    } catch (error: any) {
        return NextResponse.json({ error: "Upload failed: " + error.message }, { status: 500 });
    }
}
