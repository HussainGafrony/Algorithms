/*
mergeSort
Step :                                   
    1- Check if the array length is less than or equal to 1  
    2- Calculate the middle index of the array                  
    3- Divide - Use the middle index to split the array into two halves 
    4- Sort - Recursively apply the function to both halves       
    5- Merge - Merge the sorted halves    
*/

/*
merge
Step :                                   
    1- Initialize an empty array `result` to store the merged elements 
    2- Initialize two pointers `i` and `j` to 0 for left and right halves respectively                
    3- Compare elements at positions `i` and `j` in the left and right halves
    4- If the element in the left half is smaller, push it to `result` and increment `i`     
    5- If the element in the right half is smaller, push it to `result` and increment `j`  
    6- Repeat steps 3-5 until one of the halves is exhausted  
    7- Add the remaining elements from both halves to `result` 
    8- Return the merged and sorted array stored in `result` 
*/

// ####################
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from either left or right array
    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
