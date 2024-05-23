// Content API
/* Route List:
 * GET /api/content
 * POST /api/content
*/

import { Content } from "@/database/models/content";

export async function GET(request){
    const {searchParams} = request.nextUrl
    throw new Error(searchParams)
    const data = await Content.getAllContent();
    return Response.json(data);
}

export async function POST(request){
    const body = await request.json();
    const respondent =  await Content.addContent(body);
    return Response.json(respondent);
}