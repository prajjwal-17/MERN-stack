import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl">
        
        <div className="text-center text-xl font-semibold text-gray-800 ">
          Todo Application
        </div>

        <div className="mt-6 flex gap-4">
          
          <Link
            href="/signin"
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-center text-gray-700 
                       hover:bg-gray-100 transition shadow-2xl"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-center text-white 
                       hover:bg-blue-700 transition shadow-2xl"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </div>
  );
}
