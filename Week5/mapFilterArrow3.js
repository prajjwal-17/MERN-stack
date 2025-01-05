//given all even values in an array


const arr=[1,2,3,4,5];

//traditional way is by doing a for loop

function filtering(n){
    if (n%2==0) return true;
    else return false;
}

const ans=arr.filter(filtering);
console.log(ans);

const ans2=arr.filter((n)=>{
    if (n%2==0) return true;
    else return false;
});