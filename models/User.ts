import mongoose, { Schema, Document, Model } from "mongoose";

export enum UserRole {
    ADMIN = "Admin",
    JELA = "Jela",
    KAZI = "Kazi",
    USER = "User",
}

export enum UserStatus {
    PENDING = "pending",
    APPROVED = "approved",
    SUSPENDED = "suspended",
}

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    role: UserRole;
    districtId?: mongoose.Types.ObjectId;
    status: UserStatus;
    documents?: string[];
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        role: { type: String, enum: Object.values(UserRole), default: UserRole.USER },
        districtId: { type: Schema.Types.ObjectId, ref: "District" },
        status: { type: String, enum: Object.values(UserStatus), default: UserStatus.PENDING },
        documents: [{ type: String }],
    },
    { timestamps: true }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
