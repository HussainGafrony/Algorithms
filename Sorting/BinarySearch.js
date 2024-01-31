
/*
_ Initialize Variables
_ While Loop
_ Calculate Midpoint
_ Check Midpoint Value
_ Update Range - Key Greater
_ Update Range - Key Smaller
_ End of Loop
_ Element Not Found
*/

function BinarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {

        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] == key) {
            return mid;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;

}

let result = BinarySearch([1, 4, 7, 8, 9, 11, 15, 19, 21], 4);
console.log(result);
