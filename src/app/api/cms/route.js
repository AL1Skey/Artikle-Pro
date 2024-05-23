import { joseReadPaylater } from "@/app/helper/jwt";
import { Content } from "@/database/models/content";
import { cookies } from "next/headers";

export async function GET(){
    const auth = await cookies().get('Authorization').value
    const [type,token] = auth.split(" ")
    const {payload} = await joseReadPaylater(token)
    const respondent =  await Content.getContentByAuthorId(decade.authorId)

    return Response.json(respondent);
}

export async function POST(request){
    const body = await request.json();
    const auth = await cookies().get('Authorization').value
    const [type,token] = auth.split(" ")
    const {payload} = await joseReadPaylater(token)
    
    const respondent =  await Content.addContent({...body,authorId:payload.id,author:payload.name});
    return Response.json(respondent);
}