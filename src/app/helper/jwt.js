import { jwtVerify } from 'jose'
import jwt from 'jsonwebtoken'

export function jwtToken(paylater){
    return jwt.sign(paylater,process.env.JWT_SECRET)
}

export function joseReadPaylater(token){
    const data = new TextEncoder().encode(process.env.JWT_SECRET)
    return jwtVerify(token,data)
}