/** Convert the following object into variables in ES6 destructuring way [5, [[4], 6]] */

const [a, [[b], c]] = [5, [[4], 6]]

console.log(a) // 5
console.log(b) // 4
console.log(c) // 6

/**Calculate sum of ages
let ages = { eagle: 13, sparrow: 15, robin: 12, bluebird: 11 }; */

const ages = { 
    eagle: 13, 
    sparrow: 15, 
    robin: 12, 
    bluebird: 11 
    }
  
  let summation = 0
  Object.values(ages).forEach(age=> {
    summation += age
  })

  console.log(summation)  // 51


/**The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]] // 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

Examples

getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6 */


function getLength (arr) {
    let newArray = arr.flat(Infinity)
    return newArray.length
  }
  console.log(getLength([1, [2, 3]])) // 3 
  console.log(getLength([1, [2, [3, 4]]])) // 4
  console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) // 6
