/**
 * Created by zmk on 2017/8/16.
 */
//私有制属性name
function TestObj(){
    let name="liming";
    this.getName=function(){
        console.log(name);
    }
    this.setName=function(n){
        name=n;
    }
}
var obj=new TestObj();
console.log(obj.name);
obj.setName("zmk");
obj.getName();