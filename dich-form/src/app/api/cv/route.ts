import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import CV from '@/models/CV';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const data = await req.json();

        const cv = await CV.create(data);

        return NextResponse.json({ success: true, data: cv }, { status: 201 });
    } catch (error: any) {
        console.error('Error saving CV:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
