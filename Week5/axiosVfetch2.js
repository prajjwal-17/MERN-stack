//POST

async function main1(){
    const response=await fetch("https://www.postb.in/1725898767019-4533428996801",{
        method:"POST"
           
    });
    const textual=await response.text();
        console.log(textual);
    
}


async function main2() {
    try {
        const response = await axios.post("https://www.postb.in/1725898767019-4533428996801");
        console.log(response.data);  // response.data automatically handles JSON response
    } catch (error) {
        console.error("Error making POST request:", error);
    }
}

main2();
// main1();// will give an error since it doesnt return json so changing to .text
