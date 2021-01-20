//Question 1
function myReverse(str) {
  // your code here
  let turned = str.split('').reverse().join('');
  return turned;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  for(i = 0 ; i < str.length ; i++){
    for(j = i + 1 ; j < str.length + 1 ; j++){
      combinations.push(str.slice(i,j));
    }
  }
  //
  return combinations; 
}

//Question 3
function allCaps(str) {
  // your code here
  let caps = str.split(' ');
  for (i = 0 ; i < caps.length ; i++){
    caps[i] = caps[i][0].toUpperCase() + caps[i].substring(1);
  }
  return caps.join(' ');
}

//Question 4
function myPower(x, n) {
  // your code here
  let answer = x**n;
  return answer;
}
//abanibiabohebe
//Question 5
function getFirstNotRepeating(str) {
  // your code here
  let counter = 0;
  for (let i = 0 ; i < str.length ; i++){
    counter = 0;
    for (let j = 0 ; j < str.length && counter !== 2 ; j++){
      if (str[i] === str[j]){
        counter += 1;
      }
    }
    if (counter < 2){
      return str[i];
    }
  }
  
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
console.log(allCombinations('dog'));
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
