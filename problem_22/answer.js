/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let res=[];
    let temp=[];
    let flag=[];
    
    let kuohao=["(",")"]
    dfs(0,n,res,temp,flag,kuohao)
    return res
};
function dfs(cur,n,res,temp,flag,kuohao){
    if(cur==2*n){
        let count1=count(flag,1);
        if(count1==n){
            return res.push(temp.join(""))
        }
       
    }
    for(let i=0;i<2;i++){
        let count0=count(flag,0);
        if(count0 <= n&&cur/2<=count0){
            flag.push(i)
            temp.push(kuohao[i])
            dfs(cur+1,n,res,temp,flag,kuohao)
            temp.pop()
            flag.pop()
        }
       
    }
}

function count(arr,s){
    let countR=0
    for(let k=0;k<arr.length;k++){
        if(arr[k]==s){
            countR++;
        }
    }
    return countR
}

n = 3
console.log(generateParenthesis(n))