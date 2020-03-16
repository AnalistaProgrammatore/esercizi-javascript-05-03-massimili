var nums = [];
for (var i = 0; i < 1000; ++i) {
    nums[i] = Math.floor(Math.random() * 1001);
}
nums.sort((a, b) => a - b)
console.log(nums)
var smallest = 2
console.log("Nella graduatoria dei più piccoli al posto " + smallest + " si trova il numero " + nums[smallest - 1])