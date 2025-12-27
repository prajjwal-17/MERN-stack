import { NextResponse } from "next/server";

export function GET(){  // a get endpoint api route
    return NextResponse.json({
        name : "Prajjwal" ,
        email : "prajjwal@gmail.com"
    })
}

//default export is exported without curly braces and constant export is exported with curly braces

export function POST(){
    return NextResponse.json({
        name : "Prajjwal" ,
        email : "prajjwal@gmail.com"
    })
}
// if this was page.tsx then it would reutrn html xml but if it is route.ts it is a bckend endpoint
// if we have both then page.tsx will be ignored whn we put url in browser and backend endpoint json will conea