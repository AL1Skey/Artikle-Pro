import { jwtToken } from "@/app/helper/jwt";
import { User } from "@/database/models/user";
import { compareSync } from "bcrypt";
import { cookies } from "next/headers";

export async function POST(request){
    const body = await request.json();
    let data;

    // Validation 1
    if(!body){
        return Response.json({"message":"Please Insert the Form"})
    }
    
    // Validation 2
    if (body.email && body.username){
        return Response.json({"message":"Illegal Activity Detected. Please use Email or Username"})
    }
    else if (body.email && !body.username){
    data = await User.getUserByEmail(body.email)
    }

    else if(!body.email && body.username){
    data = await User.getUserByUsername(body.username)
    }
    else{
        return Response.json({"message":"Please insert Email or Username"})
    }

    // Validation 2.5
    if(!data){
        return Response.json({"message":"Email or Username is not registered"})
    }

    // Validation 3
    if(!body.password){
        return Response.json({"message":"Please insert Password"})
    }

    // Validation 4
    const verify = compareSync(body.password,data[0].password);
    if(!verify){
        return Response.status(401).json({
            message: "Email or password is incorrect"
        })
    }
    
    // Response
    const responden = {
        id: data[0]._id,
        name: data[0].name,
        email: data[0].email
    }

    const access_token = jwtToken(responden)

    await cookies().set("Authorization",`Bearer ${access_token}`)

    return Response.json({Authorization:`Bearer ${access_token}`});
}