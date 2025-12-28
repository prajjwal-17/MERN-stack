import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function POST(req : NextRequest){

    const data= await req.json();
    console.log(data);

    await prismaClient.user.create({
        data : {
            username : data.username ,
            name : data.name,
            password : data.password,
        }
    })

    return NextResponse.json({
        message : "You have been Signed Up"
    })
}