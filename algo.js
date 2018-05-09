var numJewelsInStones = function(J, S) {
    var jewelfinder = [];
    var number = 0;
    for (index in J){
        jewelfinder.push(J[index]);
    }
    console.log(jewelfinder);
    
    for(i in S){
        for(j in jewelfinder){
            if (S[i] === jewelfinder[j]){
                number ++;
            }
        }
    }
    
    return(number);