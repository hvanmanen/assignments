function isInArray(testedValue, arrayValues) {
  return (arrayValues.indexOf(testedValue) > -1);
}

/*
  Create a for loop that counts down from 20 to 1
  For each iteration log the current counter
*/
for (let i = 20; i >= 1; i--) {
  put(i);
}

/*
  Create a for loop that creates the following arrays
  [17, 34, 51, 68, 85], [17, 34, 51, 68, 119] and [17, 34, 51, 68, 200]
  Each array in a seperate loop
*/
// 1)
let firstArray = [];
for (let i = 17; i <= 85; i += 17) {
  firstArray.push(i);
}
assert([17, 34, 51, 68, 85], firstArray);

// 2)
let secondArray = [];
for (let i = 17; i <= 119; i += 17) {
  if (!isInArray(i, [85, 102])) {
    secondArray.push(i);
  }
}
assert([17, 34, 51, 68, 119], secondArray);

// 3)
let thirdArray = [];
for (let i = 17; i <= 85; i += 17) {
  if (i === 85) {
    thirdArray.push(200);
  } else if (!isInArray(i, [102, 119])) {
    thirdArray.push(i);
  }
}
assert([17, 34, 51, 68, 200], thirdArray);

/*
  Create while loop, multiple 2 by 2 and continue doing that until you reach 1.000.000
  return the amount of steps it took
*/
let steps = 0;
let value = 2;
while (value <= 1000000) {
  value *= 2;
  steps++;
}
assert(19, steps);

/*
  Use the array map function to convert the following input array to the output array
  input [10, 20, 30, 40, 50]
  output [5, 10, 15, 20, 25]
*/
let input = [10, 20, 30, 40, 50];
let output = input.map(function(x) {
  return x / 2;
});
assert([5, 10, 15, 20, 25], output);

/*
  Use the array filter method to remove all characters that are not from the simpsons
  ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo']
  For the people who don't know the characters from the Simpsons, Ernie, Bert and Baloo are not in the show.
  But more importantly go watch the show instead of doing these assignments. Ahum.
*/
let characters = ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo'];
let nonSimpsonsCharacters = ['Ernie', 'Bert', 'Baloo'];
let simpsonsCharacters = characters.filter(function (name) {
  return (!isInArray(name, nonSimpsonsCharacters));
});
assert(['Smithers', 'Homer', 'Bart', 'Police chief Wiggum'], simpsonsCharacters);

/*
  Convert the following object to an array
  The array should look like ['klarendal', 'alteveer', ...]
*/
let suburbsInArnhem = {
  klarendal : 'noord',
  alteveer : 'noord',
  schuitgraaf : 'zuid',
  lombok : 'noord',
  heijenoord : 'noord',
  spijkerkwatier : 'noord'
};
let objectKeys = Object.keys(suburbsInArnhem);
assert(['klarendal', 'alteveer', 'schuitgraaf', 'lombok', 'heijenoord', 'spijkerkwatier'], objectKeys);
