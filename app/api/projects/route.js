import { mongodbConnect } from "@/libs/mongoos"
import Projects from "@/modles/Project";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    const {title, image, des, site, client, server} = await req.json()
    await mongodbConnect();
    await Projects.create({title, image, des, site, client, server})
    return NextResponse.json({message:"Alhadullah create"},{status:201})
}
export const GET = async()=>{
    await mongodbConnect();
    const projects = await Projects.find();
    return NextResponse.json({projects},{status:200})
}
export const DELETE = async(req)=>{
    const id = req.nextUrl.searchParams.get("id");
    await mongodbConnect();
    await Projects.findByIdAndDelete({_id: id});
    return NextResponse.json({message:"Alhamdullaih Delete"}, {status: 201})
}