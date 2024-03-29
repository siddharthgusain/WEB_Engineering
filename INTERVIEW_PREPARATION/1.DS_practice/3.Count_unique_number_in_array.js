// Given Array --> consider is unsorted
// Count unique numbers in it.

let input = [5, 5, 2, 0, 1, 1, 7, 7, 9];

console.log("----------------TWO loops approach-----------")

function countUniqueWithSorting(input) {
    let sortedArray = input.sort(); // nlogn
    let count = 0;
    //logic with simple iteration
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i + 1] != sortedArray[i])
            count++;
    }

    return count;
}

console.log(countUniqueWithSorting(input));
// TC:- O(nlogn) // sorting
// SC:- O(1)

console.log("----------------With HASHMAP-----------")

function countUniqueWithHash(input) {
    let count = 0;
    let frequencyHash = {};
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        // logic    
        if (frequencyHash[element] == undefined) {
            frequencyHash[element] = 1;
            count++;
        }
    }

    return count;
}

console.log(countUniqueWithHash(input));

// TC:- O(n)
// SC: O(n)

console.log("----------------With SET-----------")

function countUniqueWithSet(input) {
    let count = 0;
    let set = new Set()
    for (let i = 0; i < input.length; i++) {
        set.add(input[i]);
    }

    return set.size;
}

console.log(countUniqueWithSet(input));

//TC :- O(n)
//SC:- O(n)