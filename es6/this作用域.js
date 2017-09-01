var name = "window",
    lzh = {
        name: "lzh",
        sayName: function(){
            console.log(this.name);
            console.log(name);
        }
    }

lzh.sayName();