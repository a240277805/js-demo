/**
 * Created by zmk on 2017/8/23.
 */
/*
function* gen() {
    yield "1";
    yield* gen1();
    yield "2";
    yield "5"+x;
    return "4"

}
function* gen1(x){
     yield (x);
}
var it=gen("3");
console.log(typeof it);
console.log(it.next("3"));
console.log(it.next("3"));
console.log(it.next("3"));
console.log(it.next("3"));*/

function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return console.log((x + y + z));
}

var a = foo(5);
// console.log(a.next()); // Object{value:6, done:false}
// console.log(a.next());// Object{value:NaN, done:false}
/**
 * 如果给next方法传参数， 那么这个参数将会作为上一次yield语句的返回值
 */
console.log(a.next(a.next(a.next().value).value));



var b = foo(5);
console.log(b.next()); // { value:6, done:false }
console.log(b.next(12));// { value:8, done:false }
console.log(b.next(13)); // { value:42, done:true }


/**
 * 由此实现的简单co
* */
function co(gen){
    var def=Promise.defer();


    //执行generator
    function resolve(data){
       var g= gen.next(data)
        step(g);
    }
    //执行promise ,then
    function step(it){
        it.done?def.resolve(it.value):resolve(it.value)
    }
    resolve();
    return def.promise;
}

console.log(">>>>>>>start co>>>>>>>>>>>");
co(foo(5))
console.log("<<<<<<<<end co<<<<<");

/**
 * 区分 generator 和Promise
 * generator 首先要活的这个生成器的对象，var a=gen();
 * 然后用next 可以执行下一步，传参是上一次yield的位置的值
 *
 * Promise 三种状态， 平时执行中是pedding ,
 * 然后完成了是resolve  ,拒绝了是reject
 * 用Promise 来改写异步回调，为串行 异步方式
 *
 * co +  generator   好处： 串行写代码，然后用co  来执行
 */
