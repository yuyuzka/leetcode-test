/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stackS=[];
    let m=new Map([
        ["(",0],
        [")",1],
        ["{",2],
        ["}",3],
        ["[",4],
        ["]",5]
    ])
    for(let i=0;i<s.length;i++){
        if(m.get(s[i])%2==0){
            stackS.push(s[i])
        }else{
            if(stackS==[]){
                return false
            }
            if(m.get(stackS[stackS.length-1])==(m.get(s[i])-1) ){
                stackS.pop()
            }else{
                return false;
            }
        }
    }
    if(stackS.length!=0){
        return false
    }else{
        return true
    }
};
s = "{[]}"
console.log(isValid(s))