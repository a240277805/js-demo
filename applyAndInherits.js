const util =require("util");

var ConstructorA = function () {
    this.a="zmk";
    this.func1 = function () {
        console.log('im func1!!');
    }
};
ConstructorA.prototype.func2 = function () {
    console.log('im func2!!');
};

var ConstructorB = function () {
    // ConstructorA.apply(this,arguments);
    ConstructorA.call(this);
};

 util.inherits(ConstructorB, ConstructorA);

var conb = new ConstructorB();
console.log(conb.a);
conb.func2();//正常。如果util.inherits(ConstructorB, ConstructorA);被注释了，这句将报错
conb.func1();//报错，上面ConstructorB里面注释的一行打开过后，这里就不报错了。