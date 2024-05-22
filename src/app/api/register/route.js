import { User } from "@/database/models/user";

export async function POST(request){
    const body = await request.json();
    const data = await User.addUser(body)
    if(!data){
        return Response.status(401).json({
            message: "Invalid Input"
        })
    }
    return Response.json(data);
}