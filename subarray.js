let a = [1, 2, 3];
let k = 4;


const longestSubarray = (a, k) => {
    let maximumLength = 0;
    let subarraySum = 0;
    let currentArray = [];
    let eligibleArrays = [];
    
    for (let i = 0; i < a.length; i++) {
        subarraySum = a[i];
        currentArray = [a[i]];
        //Review the value of each index in parameter "a" array. If the value of any index in array is less than or equal to k,
        //count it as an eligibleArray by pushing it into eligibleArrays array.
        if (a[i] <= k) {
            eligibleArrays.push([a[i]]);
        }
        //Begin adding subsequent indexes in array until sum is greater than or equal to k. Add values of these indexes to "currentArray". 
        //Once the sum of the currentArray > k, stop adding indexes to currentArray and push the "currentArray" into array of "eligibleArrays".
        for (let j = 0; j < a.length; j++) {
            if (i != j) {
                if (subarraySum + a[j] <= k) {
                    subarraySum += a[j];
                    currentArray.push(a[j]);
                }
            }
        }
        eligibleArrays.push(currentArray);
        //Once currentArray is pushed into eligibleArrays, check to see if currentArray's length is greater than the length of 
        //any of the prior eligibleArrays. If so, update maximumLength to the length of the currentArray.
        if (currentArray.length > maximumLength) {
            maximumLength = currentArray.length;
        };
    };
    console.log(maximumLength);
    //return maximumLength;
}

longestSubarray(a, k);