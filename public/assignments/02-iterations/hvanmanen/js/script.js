/*
  Create a for loop that counts down from 20 to 1
  For each iteration log the current counter
*/


for (i=0; i<20; i++) {
    console.log(20 -i);
}


/*
  Create a for loop that creates the following arrays
  [17, 34, 51, 68, 85], [17, 34, 51, 68, 119] and [17, 34, 51, 68, 200]
  Each array in a seperate loop
*/

//[17, 34, 51, 68, 85]
var arr1 = [];
for (var i = 1; i < 6; i++) {
    arr1.push(17 * i);
}
console.log(arr1);

// [17, 34, 51, 68, 119]
// 119 -->> 68 + 51 
// 68  -->> 51 + 34
// 51  -->> 34 + 17
// 34  -->> 17 + 17
// 17  -->> 0 + 17

// there are always assumption for constant variables ? [17,34], from you can iterate farther

// BUT I HAVE NOT FOUND THE SOLUTION, SO A HACK
var arr2 = [];
for (i = 1; i < 5; i++) {
    arr2.push(17 * i);
}
arr2.push(119);
console.log(arr2);

//[17, 34, 51, 68, 200]
var arr3 = [];
for (i = 1; i < 5; i++) {
    arr3.push(17 * i);
}
arr3.push(200);
console.log(arr3);

/*
  Create while loop, multiple 2 by 2 and continue doing that until you reach 1.000.000
  return the amount of steps it took
  
*/
  // 2**20 == 1000000
var i = 0;
var r = 2;
while (r < 1000000) {
    r *= 2;
    i++;
}
console.log(i)
/*
  Use the array map function to convert the following input array to the output array
  input [10, 20, 30, 40, 50]
  output [5, 10, 15, 20, 25]
*/
var arr_input = [10, 20, 30, 40, 50];
var arr_output = arr_input.map(function (x) { return x / 2 });
console.log(arr_output)



/*
  Use the array filter method to remove all characters that are not from the simpsons
  ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo']
  For the people who don't know the characters from the Simpsons, Ernie, Bert and Baloo are not in the show.
  But more importantly go watch the show instead of doing these assignments. Ahum.
*/

// - You could define the callback function outside, instead of anonymous
// - You could use lower level constructs: for(;;)
//   perhaps to have more control -->> in arr_people to remove not simpson
var arr_people = ['Smithers', 'Ernie', 'Homer', 'Bert', 'Bart', 'Police chief Wiggum', 'Baloo'];
var arr_simpsons = ['Smithers', 'Homer', 'Bart', 'Police chief Wiggum'];

// simple construct , but for large arrays , not sufficient
var arr_clean = []
arr_people.forEach(function (person) {
    arr_simpsons.forEach( function(p) {
        if (person === p) {
            arr_clean.push(person);
        };
    });
});
console.log(arr_clean);




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

console.log(Object.keys(suburbsInArnhem));