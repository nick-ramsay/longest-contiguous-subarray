let a = [1, 2, 3];
let k = 4;

const longestSubarray = (a, k) => {
    let maximumLength = 0;
    let subarraySum = 0;
    let currentArray = [];
    
    for (let i = 0; i < a.length; i++) {
        subarraySum = a[i];
        currentArray = [a[i]];  
        if (maximumLength === 0 && a[i] <= k) {
            maximumLength = 1;
        }
        for (let j = 0; j < a.length; j++) {
            if (i != j) {
                if (subarraySum + a[j] <= k) {
                    subarraySum += a[j];
                    currentArray.push(a[j]);
                }
            }
        }
        if (currentArray.length > maximumLength) {
            maximumLength = currentArray.length;
        };
    };
    console.log(maximumLength);
    //return maximumLength;
}

longestSubarray(a, k);