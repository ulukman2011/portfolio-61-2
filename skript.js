var findMax = function(numbers) {
    var max = numbers[0]; 
    
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    return max;
};

var nums1 = [5, 12, 8, 20, 3];
var nums2 = [-5, -1, -10, -2];
var nums3 = [44, 11, 99, 22, 55];

console.log(findMax(nums1));
console.log(findMax(nums2));
console.log(findMax(nums3));