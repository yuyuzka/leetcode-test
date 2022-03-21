/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    let first=0;
    let second=0;
    let dp=new Array(s.length+1);
    for(let i=0;i<=s.length;i++){
        dp[i]=new Array(p.length+1);
    }
    for(let i=0;i<=s.length;i++){
        for(let j=0;j<=p.length;j++){
            dp[i][j]=false;
        }
    }
    //初始化
    dp[0][0]=true;
    for (let i = 1; i <= p.length; ++i) {
        if (p[i - 1] == '*') {
            dp[0][i] = true;
        }
        else {
            break;
        }
    }
    for (let i = 1; i <= s.length; ++i) {
        for (let j = 1; j <= p.length; ++j) {
            if (p[j - 1] == '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
            else if (p[j - 1] == '?' || s[i - 1] == p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }else{
                dp[i][j]=false;
            }
        }
    }
    return dp[s.length][p.length];

    
};
s = "adceb"
p = "*a*b"
console.log(isMatch(s,p))