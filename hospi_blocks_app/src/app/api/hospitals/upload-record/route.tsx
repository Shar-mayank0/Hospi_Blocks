import {dbConnect} from '@dbConfig/dbConfig';
import {NextApiRequest, NextApiResponse} from 'next';
import {Patient} from "@models/patient";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    await dbConnect();
    if (req.method === 'POST'){
        try {
            const formData = req.body;
            const newPatient = new Patient(formData);
            await newPatient.save();
            res.status(201).json({message: "Record added successfully"});

        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal Server Error"});
        }

