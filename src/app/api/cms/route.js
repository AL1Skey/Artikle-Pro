import { joseReadPaylater } from "@/app/helper/jwt";
import { Content } from "@/database/models/content";
import { cookies } from "next/headers";

export async function GET(request){
    const id = request.cookies.getAll()
    // const respondent =  await Content.getContentByAuthorId(id)

    return Response.json({id:request.locals});
}

export async function POST(request){
    const req = await request.json();
    const respondent =  await Content.getContentByAuthorId(req.id)
    return Response.json(respondent);
}