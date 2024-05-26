"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function login(formData){
    const form ={
        email:formData.get('email'),
        password:formData.get('password')
    }
    
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((rest)=> rest.json())
        if(res.message){
            throw new Error(res.message)
        }
        await cookies().set("Authorization", res.Authorization)
        redirect("/home")
    
}

export async function register(formData){
    const form ={
        username:formData.get('username'),
        email:formData.get('email'),
        password:formData.get('password')
    }
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/register', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((rest)=> rest.json())
        if (res.message){
            throw new Error(res.message)
        }
        redirect("/login")
}