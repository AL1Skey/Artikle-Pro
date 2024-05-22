import { jwtToken } from "@/app/helper/jwt";
import { User } from "@/database/models/user";
import { compareSync } from "bcrypt";

export async function POST(request){
    const body = await request.json();
    const data = await User.getUserByEmail(body.email)
    const verify = compareSync(body.password,data[0].password);
    if(!verify){
        return Response.status(401).json({
            message: "Email or password is incorrect"
        })
    }
    
    const responden = {
        id: data[0].id,
        name: data[0].name,
        email: data[0].email,
    }

    const access_token = jwtToken(responden)

    return Response.json({access_token:access_token});
}