

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            let ans = `Index: ${mid} Value ${arr[mid]}`
            return ans;
        }
        else if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }

    }

    return -1 ;

}
let arr = [2, 4, 6, 8, 10];
let target = 8;
console.log(binarySearch(arr, target));





