import { Content } from "@/database/models/content";

export async function PUT(request,{params}){
    const body = await request.json();
    
    const respondent = await Content.updateContent(params.slug,body)

    return Response.json(respondent);
}

export async function DELETE(request,{params}){

    const respondent = await Content.deleteContent(params.slug)

    return Response.json(respondent);
}