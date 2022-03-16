var letterCombinations = function(digits) {
    let convex=["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    if(digits==""){
        return []
    }
    let res=[]
    let temp=[];
    dfs(0,convex,temp,digits,res);
    return res
};

function dfs(n,convex,temp,digits,res){
    console.log(n)
    if(n==digits.length){      
        res.push(temp.join(""))
        return ;
    }
    for(let j=0;j<convex[digits[n]].length;j++){   
        temp.push(convex[digits[n]][j]) 
        dfs(n+1,convex,temp,digits,res)    
        temp.pop() 
    }  
}

digits = ""
console.log(letterCombinations(digits))