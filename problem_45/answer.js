/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
     if(nums.length==1){
         return 0
     }
    let steps=[]
    let temp=nums.length;
    let count=0;
    for(let i=0;i<nums.length;i++){
        steps.push(nums[i]+i)
        if((nums[i]+i)>=(nums.length-1)){
            temp=i;
            count++
            break;
        }
    }
    while(temp!=0){
        for(let i=0;i<steps.length;i++){
            if(steps[i]>=temp){
                temp=i;
                count++;
                break;
            }
        }
    }
    return count;
};

//复杂度O(n)，每一次选择的跳的位置时，做贪心选择
var jump2 = function(nums) {
    let maxPosition=0;
    let end=0
    let count=0;
    for(let i=0;i<nums.length-1;i++){
        maxPosition=Math.max(maxPosition,nums[i]+i) ;
        if(end==i){
            //贪心选择
            end=maxPosition;
            count++
        }

    }
}

nums =[2,3,1,1,4]
console.log(jump2(nums))