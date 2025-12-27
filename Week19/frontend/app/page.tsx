import Image from "next/image";
import axios from "axios";


export default async function Home() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  const data = response.data;
  console.log("Request Send out") // this log comes on server's log not on browsers log which shows the firsrt three lines run on server and only html is sent to browser
  return (
    <div className="">
      User Page 
      {data.name}
      {data.email}
    </div>
  );
}
