/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let res='';
    let flag=0;
    for(let i=0;i<s.length;i++){
        if(res==''){
            if(s[i]==" ")
                continue;
            if(!isNaN(s[i])&& flag==0 ){
                flag=1;
                res+=s[i];
                continue;
            }
            //js数字的判断
            if((s[i]=="-"||s[i]=="+")&&!isNaN(s[i+1])&&(s[i+1]!=" ")){
                if(s[i]=="-"){
                     flag=-1;
                }else{
                    flag=1;
                } 
                res+=s[i+1];
                i++;
                continue;
            };
            if(isNaN(s[i])){
                break;
            }
        }else{
            if(res.length==11||isNaN(s[i]))
                break;
            else if(!isNaN(s[i])){
                res+=s[i]
             }
        }
    }
   console.log("res:"+res)
   console.log("flag:"+flag)
   if(flag==0){
       return 0;
   }else{
       res=flag*parseInt(res);
       if(res<-2147483648)
        return -2147483648
       else if(res>2147483647)
        return 2147483647;
       else{
         return res;
    }
   }
   
    };
    s = "   -  42";
    console.log(myAtoi(s))