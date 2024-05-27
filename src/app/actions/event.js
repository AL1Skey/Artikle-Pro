"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { joseReadPaylater } from "../helper/jwt";

export async function login(formData) {
  const form = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/login", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((rest) => rest.json());
  if (res.message) {
    throw new Error(res.message);
  }
  await cookies().set("Authorization", res.Authorization);
  redirect("/home");
}
export async function logout() {
  await cookies().delete("Authorization");
  redirect("/home");
}

export async function createArticle(formData) {
  const cook = await cookies().get("Authorization").value;
  const { payload } = await joseReadPaylater(cook.split(" ")[1]);

  const form = {
    author: payload.name,
    authorId: payload.id,
    content: { title: formData.get("title"), content: formData.get("content") },
    createAt:  Date.now(),
    updateAt:  Date.now(),
  };
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/content", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((rest) => rest.json());
  if (res.message) {
    throw new Error(res.message);
  }
  redirect("/home");
}

export async function updateArticle(formData) {
    const cook = await cookies().get("Authorization").value;
    const { payload } = await joseReadPaylater(cook.split(" ")[1]);
    const dateupdate = Date.now()
    const form = {
        author: payload.name,
        authorId: payload.id,
        content: { title: formData.get("title"), content: formData.get("content") },
        createAt: new Date(formData.get("createAt")),
        updateAt: dateupdate,
      };
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/cms/${formData.get('_id')}`,{
        method: "PUT",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((rest) => rest.json());

      if (res.message) {
        throw new Error(res.message);
      }
      redirect("/profile");

    }

export async function deleteArticle(id) {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/cms/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((rest) => rest.json());
    if (res.message) {
      throw new Error(res.message);
    }
    redirect("/profile");
}

export async function getUser() {
  const auth = await cookies().get("Authorization").value;
  const [type, token] = auth.split(" ");
  const { payload } = await joseReadPaylater(token);

  return { ...payload };
}

export async function register(formData) {
  const form = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/register", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((rest) => rest.json());
  if (res.message) {
    throw new Error(res.message);
  }
  redirect("/login");
}
