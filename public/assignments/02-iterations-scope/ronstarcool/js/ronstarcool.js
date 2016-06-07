let c = console;
/*
  Create a for loop that counts down from 20 to 1
  For each iteration log the current counter
*/
for (let i = 20; i > 0; i--){
  c.log(i);
}
/*
  Create a for loop that creates the following arrays
  [17, 34, 51, 68, 85], [17, 34, 51, 68, 119] and [17, 34, 51, 68, 200]
  Each array in a seperate loop
*/
let arr = [];
for(let i = 17 ; i < 86; i += 17){
  arr.push(i);
}
c.log(arr);
arr = [];
for(let i = 17; i < 120; i += 17){
  if(i < 69 || i > 118){
    arr.push(i);
  }
}
c.log(arr);
arr = [];
for(let i = 17; i < 86; i += 17){
  if(i < 69){
    arr.push(i);
  } else {
    arr.push(200);
  }
}
c.log(arr);
/*
  Create while loop, multiple 2 by 2 and continue doing that until you reach 1.000.000
  return the amount of steps it took
*/
let count = 0;
let a = 2;
while(a < 1000000){
  a *= 2;
  count++;
}
c.log(count);
/*
  Use the array map function to convert the following input array to the output array
  input [10, 20, 30, 40, 50]
  output [5, 10, 15, 20, 25]
*/
let input = [10, 20, 30, 40, 50];
let output = input.map((x) => x/2);
c.log(output);
/*
  Use the array filter method to remove all characters that are not from the simpsons
  ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo']
  For the people who don't know the characters from the Simpsons, Ernie, Bert and Baloo are not in the show.
  But more importantly go watch the show instead of doing these assignments. Ahum.
*/
arr = ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo'];
let test = ['Ernie', 'Bert', 'Baloo'];
let result = arr.filter((x) =>  !test.includes(x));
c.log(result);
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
arr = [];
for(var key in suburbsInArnhem){
  arr.push(key);
}
c.log(arr);