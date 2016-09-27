/**
 * Created by cleverjam on 9/27/16.
 */

var Product = require("./product.model");
var interface = {
    getList: function getList(){
        return new Promise(function(resolve,reject){
            Product.find(function(err, products){
                if(err)
                    reject(err);
                resolve(products)
            })
        });
    }
}


module.exports = interface;