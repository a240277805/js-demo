/**
 * Created by zmk on 2017/8/16.
 */
// http://baike.xsoftlab.net/view/544.html

var cache={};
function test(text){
    cache[text]=text;
}
test("zmk");
test("liming");
console.log(cache.length());