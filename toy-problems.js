/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
    var sums = [1, 2, 3, 4];
    var adder = function (nums) {
        var sum = 0;
        for (var i = 0; i < nums.length; i++) {
            sum += nums[i] + 1;
        }
        return sum;
    }
    


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
var flaten = function (arr, newArr) {
    if (newArr == undefined) {
        newArr = [];
    }
    for (var i = 0; i < arr.length; i++) {
        if ( Array.isArray(arr[i])) {
            flaten(arr[i], newArr);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

  

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
var order = function (arr, newArr) {
    if (newArr == undefined) {
        newArr = [];
    }
    for (var i = 1; i <= (arr.length / 3); i++) {
        newArr.push('a'+i, 'b'+i, 'c'+i);
    }
    return newArr;
}

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/
var arr1 = [1,2,3,4,5,6,7,8];
var missing = function (arr1) {
    var arr2 = arr1.slice();
    arr2.splice(Math.floor(Math.random()*(arr2.length)));
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            return arr1[i];
        }
    }
}





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longests("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
var longests = function (str) {
    str = str.split(' ');
    var longWords = [];
    var longest = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > longest) {
            longest = str[i].length;
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i].length === longest) {
            if (longWords.indexOf(str[i].toLocaleLowerCase()) === -1) {
                longWords.push(str[i].toLocaleLowerCase());
            }
        }
    }
    return longWords;
}

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
var summing = function (num, x, y) {
    var multiples = [];
    var sum = 0;
    for (var i = 1; i <= (num-1 )/ x; i++) {
        multiples.push(x * i);
    }
    for (var i = 1; i <= (num-1 )/ y; i++) {
        multiples.push(y * i);
    } 
    for (var i = 0; i < multiples.length; i++) {
        sum += multiples[i];
    }
    return sum;
}

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/
var charRemoval = function (str) {
    str = str.toLowerCase().split('');
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            str.splice(str.lastIndexOf(str[i]), 1);
        }
    }
    return str.join('');
}


/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
var sum = function (a,b) {
    if (b) {
        return a + b;
    } else {
        return function (c) {
            return a + c;
        }
    }
}
