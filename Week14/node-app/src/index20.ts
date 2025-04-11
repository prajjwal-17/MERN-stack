function getMax(nums: number[]){
    let maxValue=-1000000000;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>maxValue) maxValue=nums[i];
        
    }
    return maxValue;
}

console.log(getMax([1,2,34,34,25,52,25,55,2]));


