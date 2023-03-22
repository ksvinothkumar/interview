// Given N = 2, the function should return ["1: A to C", "2: A to B", "1: C to B"] which corresponds to the movements of each Ring on each Plate.
function towerOfHanoi(n) {
  let moves = [];

  function moveDisk(disk, from, to) {
    moves.push(`${disk}: ${from} to ${to}`);
  }

  function towerOfHanoiUtil(n, from, to, aux) {
    if (n === 1) {
      moveDisk(1, from, to);
    } else {
      towerOfHanoiUtil(n - 1, from, aux, to);
      moveDisk(n, from, to);
      towerOfHanoiUtil(n - 1, aux, to, from);
    }
  }

  towerOfHanoiUtil(n, "A", "B", "C");

  return moves;
}

console.log(towerOfHanoi(3)); // ["1: A to C", "2: A to B", "1: C to B"]



//Given S = "abababa", the function should return ["ababab", "bababa"] which are the longest balanced substrings in js
function findLongestBalancedSubstrings(S) {
    let balancedSubstrings = [];
  
    for (let i = 0; i < S.length; i++) {
      let substring = S.slice(i);
  
      let numAs = 0;
      let numBs = 0;
  
      for (let j = 0; j < substring.length; j++) {
        if (substring[j] === "a") {
          numAs++;
        } else if (substring[j] === "b") {
          numBs++;
        }
  
        if (numAs === numBs) {
          balancedSubstrings.push(substring.slice(0, j + 1));
        }
      }
    }
  
    let longestLength = 0;
    let longestSubstrings = [];
  
    for (let i = 0; i < balancedSubstrings.length; i++) {
      let substringLength = balancedSubstrings[i].length;
  
      if (substringLength > longestLength) {
        longestLength = substringLength;
        longestSubstrings = [balancedSubstrings[i]];
      } else if (substringLength === longestLength) {
        longestSubstrings.push(balancedSubstrings[i]);
      }
    }
  
    return longestSubstrings;
  }
  
  console.log(findLongestBalancedSubstrings("abababa")); // ["ababab", "bababa"]
  
