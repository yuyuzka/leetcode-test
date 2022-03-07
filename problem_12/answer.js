/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
     let romanArray=["I","V","X","L","C","D","M"]
     let remain;
     let i=0;
     let res=[]
     let temp=[]
    while(num!=0){
        remain=num%10;
        num=Math.floor(num/10)
        if(remain>=5 && remain<9){
            temp.push(romanArray[i*2+1])
            remain-=5
        }
        if(remain<4){
            for(;remain>0;remain--){
                temp.push(romanArray[i*2])
            }
        }
        if(remain==4){
            temp.push(romanArray[i*2])
            temp.push(romanArray[i*2+1])
        }
        if(remain==9){
            temp.push(romanArray[i*2])
            temp.push(romanArray[(i+1)*2])
        }
        res.unshift(temp.join(""))
        temp=[]
        i++
    }
    return res.join("")
};
console.log(intToRoman(1994))