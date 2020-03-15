function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}
var a = [];
for (var i = 0; i < 10000; ++i) {
    a[i] = Math.floor((Math.random() * 1000000) + 1);
}
var start = new Date().getTime()
console.log(qSort(a));
var stop = new Date().getTime()
var elapsed = stop - start
console.log("Tempo di elaborazione col quick sort " + elapsed + " millisecondi.")
var start = new Date().getTime()
a.sort((a, b) => a - b)
console.log(a);
var stop = new Date().getTime()
var elapsed = stop - start
console.log("Tempo di elaborazione col sort interno " + elapsed + " millisecondi.")
