/**
 * Created by zmk on 2016/10/26.
 */
var nums = {
    "first": 7,
    "second": 14,
    "third": 13
}

var luckyNums = JSON.stringify(nums, function(key, value){
    if (value == 13) {
        return undefined;
    } else {
        return value;
    }
});
console.log(luckyNums);
