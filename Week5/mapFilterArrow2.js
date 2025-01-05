//given an array return every value multiplied by 2

const input=[1,2,3,4,5];

//traditional method is using for loop

function transform(i){
    return 2*i;
}

const ans=input.map(transform);
console.log(ans);

const ans2=input.map(function(i){
    return i*2;
});
