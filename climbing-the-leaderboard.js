var comeco, fim;
function climbingLeaderboard(scores, alice) {
    let i, j;
    let len_alice = alice.length;
    let result = [];

    let uniqueScores = scores.filter(function(elem, pos) {
        return scores.indexOf(elem) == pos;
    })

    let len_scores = uniqueScores.length

    for(i = 0 ; i < len_alice ; i++){
        j=0;
        result[i]=len_scores+1;
        let alice_pos = uniqueScores.indexOf(alice[i]);
        if(alice_pos!=-1){
            result[i] = alice_pos+1;
            continue;
        }
        while(alice[i]<uniqueScores[j]){
            if(j>len_scores)    break;
            j++;
        }
        if(j!=len_scores)
            result[i] = j+1;
    }
    return result;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20 ,10], [5, 25, 50, 120]));
console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));