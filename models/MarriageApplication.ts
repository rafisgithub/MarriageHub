import mongoose, { Schema, Document, Model } from "mongoose";

export enum ApplicationStatus {
    PENDING = "Pending",
    APPROVED = "Approved",
    COMPLETED = "Completed",
}

export interface IMarriageApplication extends Document {
    husbandInfo: {
        name: string;
        nid: string;
        dob: Date;
        address: string;
    };
    wifeInfo: {
        name: string;
        nid: string;
        dob: Date;
        address: string;
    };
    kaziId: mongoose.Types.ObjectId;
    status: ApplicationStatus;
    documents: string[];
    createdAt: Date;
    updatedAt: Date;
}

const MarriageApplicationSchema: Schema<IMarriageApplication> = new Schema(
    {
        husbandInfo: {
            name: { type: String, required: true },
            nid: { type: String, required: true },
            dob: { type: Date, required: true },
            address: { type: String, required: true },
        },
        wifeInfo: {
            name: { type: String, required: true },
            nid: { type: String, required: true },
            dob: { type: Date, required: true },
            address: { type: String, required: true },
        },
        kaziId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        status: { type: String, enum: Object.values(ApplicationStatus), default: ApplicationStatus.PENDING },
        documents: [{ type: String }],
    },
    { timestamps: true }
);

const MarriageApplication: Model<IMarriageApplication> =
    mongoose.models.MarriageApplication || mongoose.model<IMarriageApplication>("MarriageApplication", MarriageApplicationSchema);

export default MarriageApplication;
