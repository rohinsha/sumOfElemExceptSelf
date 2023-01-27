//for eg ([5,2,3,1,6]) in this for the first time it will be
// o/p :- [sum of all elements except for 5,sum of all elements except for 2, sum of all elements except for 3, sum of all elements except for 1, sum of all elements except for 6 ]=

//[12, 15, 14, 16, 11];
let newArr = [];
function toFindSumOfElemNotTakingSelfIndex(arr) {
  newArr = arr.map((x, i, arr) => {
    let gh = [...arr];
    //console.log(gh);
    gh.splice(i, 1);
    let ky = gh.reduce((a, b) => (a += b));
    //console.log(ky);
    return ky;
  });
}
toFindSumOfElemNotTakingSelfIndex([5, 2, 3, 1, 6]);
console.log(`output is ${newArr}`);
