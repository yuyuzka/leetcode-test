/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let dp=new Array(s.length)
    for(let i=0;i<dp.length;i++){
        dp[i]=new Array(s.length)
    }
    let maxlength=1;
    let start=0;
    for(i=0;i<s.length;i++){
        dp[i][i]=1;
        if(i<s.length-1){
         if(s[i]==s[i+1]){
            dp[i][i+1]=1;
            maxlength=2;
            start=i;
         }
        }
       
    }
    for(L=3;L<=s.length;L++){
        console.log("L:"+L)
        for(i=0;i+L-1<s.length;i++){
            let j=i+L-1;
            console.log("j"+j)
            if((s[i]===s[j]) && (dp[i+1][j-1]===1)){
                dp[i][j]=1;
                maxlength=L;
                start=i;
                console.log("start:"+start)
            }
        }
    }
    console.log(maxlength)
    if(maxlength==1){
        return s[0]
    }else{
        return s.slice(start,maxlength+start)
    }
    
 };

 s='aaaaa'
 console.log(longestPalindrome(s)) 