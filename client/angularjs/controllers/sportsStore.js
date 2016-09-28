angular.module("sportsStore")
.constant("dataUrl", "http://localhost:3000/products")
.controller("sportsStoreCtrl", function($http,dataUrl) {
this.data ={};
var self = this;

$http.get(dataUrl)
.then(function(response){
  self.data.products = response.data;
})
.catch(function(error){
  self.error = error;
})
  // this.data = {
  //     products: [{
  //         name: "product #1",
  //         description: "A product",
  //         category: "category #1",
  //         price: 100
  //     }, {
  //         name: "product #2",
  //         description: "A product",
  //         category: "category #1",
  //         price: 110
  //     }, {
  //         name: "product #3",
  //         description: "A product",
  //         category: "category #2",
  //         price: 210
  //     }, {
  //         name: "product #4",
  //         description: "A product",
  //         category: "category #3",
  //         price: 202
  //     },
  //   ]
  // }
});
