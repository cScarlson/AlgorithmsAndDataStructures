
/**
 * TODO: If func counts out, let it return 0
 *  * Assume !isPalindrome (invert logic)
 */
function isPalindrome(S){
    var s = S
      , len = s.length
      , mid = len/2;
      , i = 0, j = len-1;

    while(i<mid){
        var l = s.charAt(i);
        while(j>=mid){
            var r = s.charAt(j);
            if(l === r){
                console.log('@while *', i, l, '...', j, r);
                --j;
                break;
            }
            console.log('@while !', i, l, '...', j, r);
            return 0;
        }
        ++i;
    }
    return 1;
}

var nooe = solution('neveroddoreven');
var kayak = solution('kayak');
var kayaks = solution('kayaks');

console.log('@isPalindrome', nooe, kayak, kayaks);



