/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
     let end=0;
     let maxPosition=0;
     if(nums.length==1){//nums=[0]
         return true
     }
    for(let i=0;i<nums.length-1;i++){
        maxPosition=Math.max(maxPosition,nums[i]+i)
        if(end==i){
            end=maxPosition;
        }
        if(i>end){//nums=[0,2,3]
            return false
        }
        if(maxPosition>=nums.length-1){
            return true;
        }
    }
    return false
};
nums =[3,2,1,0,4]
console.log(canJump(nums))