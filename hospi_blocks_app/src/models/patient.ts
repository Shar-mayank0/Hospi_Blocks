import mongoose, { Schema, model, Document } from 'mongoose';

// Define the types for the sub-documents and main patient document
interface MedicalRecord {
    recordID: string;
    type: 'Prescription' | 'Lab Result' | 'Diagnosis' | 'Procedure';
    date: Date;
    description: string;
    ipfsHash?: string;
}

interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

interface PatientDocument extends Document {
    patientID: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    sex: 'Male' | 'Female';
    contactNumber: string;
    email: string;
    address: Address;
    medicalRecords: MedicalRecord[];
    governmentID: string;
    verified: boolean;
    blockchainAddress?: string;
    registrationTimestamp: Date;
}

// Schema for Medical Records
const medicalRecordSchema = new Schema<MedicalRecord>({
    recordID: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        enum: ['Prescription', 'Lab Result', 'Diagnosis', 'Procedure'],
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    description: {
        type: String,
        required: true,
    },
    ipfsHash: {
        type: String,
        default: '', // Populated after storing in IPFS
    },
});

// Schema for Address
const addressSchema = new Schema<Address>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
});

// Main Patient Schema
const patientSchema = new Schema<PatientDocument>({
    patientID: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    sex: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: addressSchema,
        required: true,
    },
    medicalRecords: {
        type: [medicalRecordSchema],
        default: [],
    },
    governmentID: {
        type: String,
        required: true,
        unique: true,
    },
    verified: {
        type: Boolean,
        default: false, // To be set after verification
    },
    blockchainAddress: {
        type: String,
        default: '', // Populated after pushing to the blockchain
    },
    registrationTimestamp: {
        type: Date,
        default: Date.now,
    },
});

// Export the model
const Patient = (mongoose.models.Patient as mongoose.Model<PatientDocument>) || mongoose.model<PatientDocument>('Patient', patientSchema);
export default Patient;
