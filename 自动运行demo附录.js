module.exports=function (i) {
    console.log("zmk"+i);
     return new Promise(function (resole,reject) {
        setTimeout(function () {
            console.log("resolve method1");
        },1000);
        setTimeout(function () {
            console.log("resolve method2s");
            resole();
        },1000);

    })
}