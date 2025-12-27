import Image from "next/image";
import axios from "axios";


export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details")
  // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const data = response.data;
  console.log("Request Send out") // this log comes on server's log not on browsers log which shows the firsrt three lines run on server and only html is sent to browser
   return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.name}
                </div>
                
                {data?.email}
            </div>
        </div>
    </div>
  );
}
