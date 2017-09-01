global.Promise = require("bluebird");
const co = require("co");

function data1() {
    co(function* () {

        const startT = new Date;




        const pros = (require("./自动运行demo附录")(1)).then((data) => {
            console.log("enter pros callbaacks");
            console.log("-------历时：" + (new Date - startT));
    })
        ;


        const allpromise = Promise.all([pros]);

        allpromise.then(function () {
            console.log("success")
        })

    })
}


function* test1 () {

}

data1();


