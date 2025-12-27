"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md">
        <h1 className="text-center text-xl font-semibold text-gray-800">
          Create Account
        </h1>

        <form className="mt-6 space-y-4 text-gray-900">
          <input
            type="email"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password + eye */}
          <div className="relative">
            <input
              type={hidden ? "password" : "text"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setHidden(!hidden)}
              className="absolute inset-y-0 right-3 flex items-center
                         text-gray-500 hover:text-gray-700"
            >
              {hidden ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          <button
            onClick={() => {
              axios.post("http://localhost:3000/api/v1/signup", {
                username,
                name,
                password,
              });
            }}
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white
                       hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
