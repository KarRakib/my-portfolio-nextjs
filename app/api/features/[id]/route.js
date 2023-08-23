const { mongodbConnect } = require("@/libs/mongoos");
const { default: Features } = require("@/modles/Features");
const { NextResponse } = require("next/server");

export const PUT = async (req, { params} ) => {
    const { newTitle: title, newDes: des, newIcon: icon } = await req.json()
    const {id} = await params;
    await mongodbConnect();
    await Features.findByIdAndUpdate(id, { title, des, icon });
    return NextResponse.json({ Message: 'update' }, { status: 201 })
}
export const GET =async({params})=>{
    const {id}= await params;
    await mongodbConnect();
    const featur = await  Features.findOne({_id:id});
    return NextResponse.json({featur},{status:201})
}