import { NextRequest, NextResponse } from "next/server";

export function GET(req : NextRequest){
    // const headers = req.headers;
    // const authorizationHeader = headers["authorization"];
    // const decoded = jwt.decode(authorizationHeader , "SECRET");
    // const userId =decoded.userId;
    // hit the db

    return NextResponse.json({
        avatarURL : "https://images.google.com/cat.png"
    })
}