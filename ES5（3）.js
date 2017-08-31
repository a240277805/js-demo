/**
 * Created by zmk on 2016/10/26.
 */
function locate(){
    console.log(this.location);
}

function Maru(location){
    this.location = location;
}

var kitty = new Maru("cardboard box");

var locateMaru = locate.bind(kitty);

locateMaru();
