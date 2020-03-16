// ricerca sequenziale - mi fermo appena lo trovo
function seqSearch(arr, data) {
    var ultimaPosizione = -1
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return i;
        }
    }
    return -1;
}
function insertionSort(dataStore) {
    var temp, inner;
    for (var outer = 1; outer <= dataStore.length - 1; ++outer) {
        temp = dataStore[outer];
        inner = outer;
        while (inner > 0 && (dataStore[inner - 1] >= temp)) {
            dataStore[inner] = dataStore[inner - 1];
            --inner;
        }
        dataStore[inner] = temp;
    }
}
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}
// putstr("Enter a number to search for: ");
// var num = readline();
var num = 1
// print();
start = new Date().getTime();
var position = seqSearch(nums, num);
stop = new Date().getTime();
elapsed = stop - start;
console.log("Tempo per la ricerca sequenziale: " + elapsed + " millisecondi.");
if (position >= 0) {
    console.log(num + " is in the array at position " + position);
}
else {
    console.log(num + " is not in the array.");
}
// print();
console.log(nums);
// faccio il sort
start = new Date().getTime();
insertionSort(nums);
//  faccio la ricerca binaria
var retVal = binSearch(nums, num);
stop = new Date().getTime();
elapsed = stop - start;
if (retVal >= 0) {
    console.log("Found " + num + " at position " + retVal);
}
else {
    console.log(num + " is not in array.");
}
console.log("Tempo per il sort e la ricerca binaria " + elapsed + " millisecondi.")