/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let res=strs[0];
    for(let i=1;i<strs.length;i++){
        let j=0;
        for(j=0;j<Math.min(res.length,strs[i].length);j++){
            if(res[j]!=strs[i][j]){
                if(j==0){
                    return ""
                }
                res=res.slice(0,j)
                console.log("j:"+j+"res:"+res)
                break;
            }
        }
        res=res.slice(0,j)
    }
    return res;
};
strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))