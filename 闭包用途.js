/**
 * Created by zmk on 2017/8/16.
 */
const Queue=require("./队列/queue");
/*
 http://www.jb51.net/article/57259.htm
闭包有几大用途：
1 匿名自执行函数
2 缓存
3 实现封装
4 闭包的另一个重要用途是实现面向对象中的对象，传统的对象语言都提供类的模板机制，*/

/*1*/

var method=(function(a){
    var myQueue=new Queue(3);
    console.log("-------------------------------------------");

    return {
        SayName:function (text){
            if(myQueue.contains(text)){
              console.log(myQueue.getValue(text));
            }else{
                myQueue.push(text,"enter SayName  "+text);
            }
            console.log(myQueue.size());
    }
    }
})("zmk")
method.SayName("zmk1");
method.SayName("zmk2");
method.SayName("zmk3");
method.SayName("zmk4");
method.SayName("zmk4");

//console.log(this.name);

/*2*/
// var CachedSearchBox = (function(){
//     var cache = {},
//         count = [];
//     return {
//         attachSearchBox : function(dsid){
//             if(dsid in cache){//如果结果在缓存中
//                 return cache[dsid];//直接返回缓存中的对象
//             }
//             var fsb = new uikit.webctrl.SearchBox(dsid);//新建
//             cache[dsid] = fsb;//更新缓存
//             if(count.length > 100){//保正缓存的大小<=100
//                 delete cache[count.shift()];
//             }
//             return fsb;
//         },
//
//         clearSearchBox : function(dsid){
//             if(dsid in cache){
//                 cache[dsid].clearSelection();
//             }
//         }
//     };
// })();

// CachedSearchBox.attachSearchBox("input1");