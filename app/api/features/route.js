import { mongodbConnect } from "@/libs/mongoos";
import Features from "@/modles/Features";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { title, des, icon } = await req.json();
    await mongodbConnect();
    await Features.create({ title, des, icon });
    return NextResponse.json({ message: 'Alhamdullah create' }, { status: 201 })
} 
export const GET = async ()=>{
    await mongodbConnect();
    const features = await Features.find();
    console.log('ki o vai ki hoiche',features);
    return NextResponse.json({features},{status:200})
}
export const DELETE = async(req)=>{
    const id = req.nextUrl.searchParams.get('id');
    await mongodbConnect();
    await Features.findByIdAndDelete(id);
    return NextResponse.json({message:'delete'},{status:201})
}