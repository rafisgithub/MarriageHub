import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDistrict extends Document {
    name: string;
    division: string;
    createdAt: Date;
    updatedAt: Date;
}

const DistrictSchema: Schema<IDistrict> = new Schema(
    {
        name: { type: String, required: true, unique: true },
        division: { type: String, required: true },
    },
    { timestamps: true }
);

const District: Model<IDistrict> = mongoose.models.District || mongoose.model<IDistrict>("District", DistrictSchema);
export default District;
