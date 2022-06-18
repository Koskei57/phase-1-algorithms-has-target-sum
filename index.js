function hasTargetSum(array, target) {
    // Write your algorithm here
    /*for (let i = 0; i < array.length; i++) {
    const targetSum = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] === targetSum)
            return true;
    }

}
return false;*/
    let numberIndex = new Map();
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let complement = target - num;

        if (numberIndex.has(complement)) {
            result[0] = numberIndex.get(complement);
            result[1] = i;
            return true;

        }
        numberIndex.set(num, i);

    }
    return false;
}


/* 
  Write the Big O time complexity of your function here
 This is a nested object-has time complexity O(n)
*/

/* 
  Add your pseudocode here
create an object to keep track of all numbers we have seen
iterate over the array of numbers 
for the current number,identify a complement number that add up to our target value
check if any of the key values is a complement to the current number
if so return true otherwise continue looping through the array 
if we reach the end of the array with no available combination 
return false.

*/

/*
  Add written explanation of your solution here
Checks through an array for the target value in question and
 retuns true if there exist an two combination in the array 
that sums up to the required or targeted value in question and returns false otherwise or
 if the value being computed has no combinations in tha availed array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 5));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

    console.log("");


    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 5));
}

module.exports = hasTargetSum;