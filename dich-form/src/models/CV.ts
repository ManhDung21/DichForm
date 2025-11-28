import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICV extends Document {
    fullName: string;
    dob?: Date;
    gender?: string;
    religion?: string;
    phone?: string;
    hometown?: string;
    currentAddress?: string;
    maritalStatus?: string;
    healthStatus?: string;
    languageLevel?: string;
    carLicense?: string;
    education?: any[];
    experience?: any[];
    family?: any[];
    hasRelativeInTaiwan?: string;
    relativeName?: string;
    relativeRelationship?: string;
    relativeVisa?: string;
    strengths?: string;
    weaknesses?: string;
    hobbies?: string;
    personality?: string;
    bloodType?: string;
    height?: string;
    weight?: string;
    handedness?: string;
    eyesight?: string;
    smoking?: string;
    drinking?: string;
    specialSkills?: string;
    purpose?: string;
    certificates?: any[];
    reason?: string;
    selfPR?: string;
    createdAt: Date;
}

const CVSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    dob: { type: Date },
    gender: { type: String },
    religion: { type: String },
    phone: { type: String },
    hometown: { type: String },
    currentAddress: { type: String },
    maritalStatus: { type: String },
    healthStatus: { type: String },
    languageLevel: { type: String },
    carLicense: { type: String },
    education: [{
        schoolName: String,
        major: String,
        startDate: String,
        endDate: String,
        address: String
    }],
    experience: [{
        companyName: String,
        jobDescription: String,
        startDate: String,
        endDate: String
    }],
    family: [{
        name: String,
        relationship: String,
        birthYear: String,
        job: String
    }],
    hasRelativeInTaiwan: { type: String },
    relativeName: { type: String },
    relativeRelationship: { type: String },
    relativeVisa: { type: String },
    strengths: { type: String },
    weaknesses: { type: String },
    hobbies: { type: String },
    personality: { type: String },
    bloodType: { type: String },
    height: { type: String },
    weight: { type: String },
    handedness: { type: String },
    eyesight: { type: String },
    smoking: { type: String },
    drinking: { type: String },
    specialSkills: { type: String },
    purpose: { type: String },
    certificates: [{
        name: String,
        date: String,
        level: String
    }],
    reason: { type: String },
    selfPR: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// Prevent overwriting model if already compiled
const CV: Model<ICV> = mongoose.models.CV || mongoose.model<ICV>('CV', CVSchema);

export default CV;
