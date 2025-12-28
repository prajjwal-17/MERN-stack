import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client"; // not needed due to singleton prisma client in lib/db.ts
import prisma from "@/app/lib/db";

// const prismaClient = new PrismaClient(); // not needed due to singleton prisma client in lib/db.ts

export async function POST(req : NextRequest){

    const data= await req.json();
    console.log(data);

// Prisma lowercases the model name when generating the client
// model User → prisma.user

    await prisma.user.create({
        data : {
            // data: is a Prisma API keyword
            username : data.username ,
            name : data.name,
            password : data.password,
        }
    })

    return NextResponse.json({
        message : "You have been Signed Up"
    })
}

export async function GET(req : NextRequest){
    const user = await prisma.user.findFirst();//Fetches the first row from the User table

    return NextResponse.json({
        user 
    })
}

/*
WHY THIS GET ENDPOINT IS NOT IDEAL IN NEXT.JS APP ROUTER:

This endpoint is being called from a Server Component using axios/fetch.
That means:
- The page is already rendering on the server
- Yet we are making an HTTP request from the server back to itself
- This introduces unnecessary overhead (routing, middleware, JSON serialization)

Flow looks like this:
Server Component → HTTP request → API Route → Prisma → DB → JSON → Server Component

This is redundant because the Server Component can directly access the database.

WHY THIS IS CONSIDERED BAD PRACTICE:
- Extra network hop inside the same server
- Slower rendering
- Duplicate logic (API + page)
- Harder to maintain

WHAT SHOULD BE DONE INSTEAD:
- For READ operations in Server Components:
  → Call Prisma directly inside the Server Component
- Reserve API routes only for:
  → Client Components
  → Mutations (POST/PUT/DELETE)
  → External/public APIs

Correct flow:
Server Component → Prisma → DB → HTML

This keeps data access server-only, secure, faster, and aligned with
Next.js App Router best practices.
*/
