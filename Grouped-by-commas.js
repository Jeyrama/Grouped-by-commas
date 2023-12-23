/*
Finish the solution so that it takes an input n (integer) 
and returns a string that is the decimal representation 
of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Examples:
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/


// Solution

function groupByCommas(n) {
  let output = '';
  n = n.toString().split('').reverse().join('');
  for (i = 0; i < n.length; i++) {
    if (i % 3 === 0 && i != 0) output += ',';
    output += n[i];
    console.log(output);
  }
  return output.split('').reverse().join('');
}

// or

function groupByCommas(n) {
  let s = n.toString(),
      r = [];
  
  // reverse number string so we can easily count up in blocks of 3
  s = reverse(s);
  
  for (let i = 0, l = s.length; i < l; i += 3) {
    r.push(s.substr(i, 3));
  }
  
  // combine the groups of 3 numbers into string, then reverse back to original order
  return reverse(r.join(','));
}

function reverse(s) {
  return s.split('').reverse().join('');
}