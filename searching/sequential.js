function seqSearch(arr, data) {
    var ultimaPosizione = -1
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            ultimaPosizione = i;
        }
    }
    return ultimaPosizione;
}
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = Math.floor(Math.random() * 11);
}
// putstr("Enter a number to search for: ");
// var num = readline();
var num = 1
// print();
var position = seqSearch(nums, num);
if (position >= 0) {
    console.log(num + " is in the array at position " + position);
}
else {
    console.log(num + " is not in the array.");
}
// print();
console.log(nums);