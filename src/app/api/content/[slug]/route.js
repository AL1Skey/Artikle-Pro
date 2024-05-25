import { Content } from "@/database/models/content";
export async function GET(request,{params}){
    const respondent =  await Content.getContentById(params.slug)

    return Response.json(respondent[0]);
}