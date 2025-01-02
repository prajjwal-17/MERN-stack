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
        

        // any req sent will be displayed in httpdump site

        const response = await axios.post("https://httpdump.app/dumps/c4074381-51f2-44ba-a4a2-a147e7e2643c",{
            "username":"prajjwal",
            "password":"12345"
        },{headers: {
            "Authorization":"Bearer 123" 
         }  

        });//this link will change everytime
        console.log(response.data);
        
        

    
}

async function main3(){
    const response = await axios.get("https://httpdump.app/dumps/c4074381-51f2-44ba-a4a2-a147e7e2643c",
        {headers: {
        "Authorization":"Bearer 123" 
     }  

    });//this link will change everytime
    console.log(response.data);
}


async function main4() {
    const response=await axios(
        {
            url: "https://httpdump.app/dumps/c4074381-51f2-44ba-a4a2-a147e7e2643c",
            method:"POST",
            headers:{
                Authorization: "Prajjwal 17",
            },
            data:{
                username : "prajjwalchamp17"
            }
        },
    );
    console.log(response.data);
}
//in get request 2nd argument cannot be body
// main2();
// main3();
// main1();// will give an error since it doesnt return json so changing to .text
main4();
