/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {//双指针
     let left=0;
     let right=height.length-1;
     let maxRes=0;
     let area=0;
     while(left!=right){
         area=Math.min(height[left],height[right])*(right-left)
         if(area>maxRes){
             maxRes=area;
         }
         if(height[left]<=height[right]){
             left++;
         }else{
             right--;
         }
     }
    return maxRes

};
height=[1,1]
console.log(maxArea(height))