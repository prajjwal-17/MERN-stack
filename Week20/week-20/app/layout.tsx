import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const route=useRoute();
  return (
    <html lang="en">
      <body
      > 
      {/* if we have to wrap signup and signin page and not user page the dumb approach better approach is too group them */}
        {/* {route== "signin" || route == "signup"? <div>Header</div>} */}
        {children}
         {/* {route== "signin" || route == "signup"? <div>Header</div>} */}
      </body>
    </html>
  );
}
