// Content API
/* Route List:
 * GET /api/content
 * POST /api/content
*/

import { Content } from "@/database/models/content";

export async function GET(request){
    const {searchParams} = request.nextUrl
    // throw new Error(searchParams)
    const data = await Content.getAllContent(10);
    return Response.json(data);
}

export async function POST(request){

    const body = await request.json();
    const data = await Content.addContent(body)
    if(!data){
        return Response.status(401).json({
            message: "Invalid Input"
        })
    }
    
    return Response.json(data);
}