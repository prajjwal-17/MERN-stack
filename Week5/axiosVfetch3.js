// //POST

// async function main1(){
//     const response=await fetch("https://www.postb.in/1725898767019-4533428996801",
//     {
//         method:"POST",
//         body:{
//             "username":"prajjwal",
//             "password":"12345"
//         },
//         headers: {
//            "Authorization":"Bearer 123" 
//         }   
//     },);
//     const textual=await response.text();
//         console.log(textual);
    
// }

const axios = require("axios");

async function main2() {
 
        const response = await axios.post("https://www.postb.in/1725991486490-0056540251243");//this link will change
        console.log(response.data);

    
}

main2();

// main1();// will give an error since it doesnt return json so changing to .text
