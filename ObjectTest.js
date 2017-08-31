/**
 * Created by zmk on 2016/10/26.
 */
var cat = {};

Object.defineProperty(cat, "name", {
    value: "Maru",
    writable: false,
    enumerable: true,
    configurable: false
});

Object.defineProperty(cat, "skill", {
    value: "exploring boxes",
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(cat);
