/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows==1){
        return s;
    }
    let l=Math.ceil(s.length/(2*numRows-2))*(numRows-1);
    let table=new Array(numRows);
    for(let i=0;i<numRows;i++){
        table[i]=new Array(l);
    }
    //初始化
    for(let i=0;i<numRows;i++){
        for(let j=0;j<l;j++){
            table[i][j]=0;
        }
    }
    for(let ch=0;ch<s.length;ch++){
        let quo=Math.floor(ch/(2*numRows-2))
        let remainder=ch%(2*numRows-2)
        if(remainder<numRows){
            table[remainder][quo*(numRows-1)]=s[ch]
        }else{
            table[2*numRows-remainder-2][quo*(numRows-1)+(remainder+1-numRows)]=s[ch]
        }
    }
    let res="";
    for(i=0;i<numRows;i++){
        for(j=0;j<l;j++){
            if(table[i][j]!=0){
                res+=table[i][j]
            }
        }
    }
    return res;
   
   };

   s = "PAYPALISHIRING";
   numRows = 3;
   convert(s, numRows)
