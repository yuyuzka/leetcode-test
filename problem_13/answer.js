/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let romanTran=new Map([ 
        ["I",1],
        ["V",5],
        ["X",10],
        ["L",50],
        ["C",100],
        ["D",500],
        ["M",1000]
    ])
    let res=0;
    for(let i=0;i<s.length;i++){
        res+=romanTran.get(s[i]);
        if(romanTran.get(s[i+1])>romanTran.get(s[i])){
            res+=romanTran.get(s[i+1])-2*romanTran.get(s[i]);
            i++;
        }
    }
    return res;
};
s = "LVIII";
console.log(romanToInt(s))