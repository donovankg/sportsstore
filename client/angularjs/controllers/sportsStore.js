angular.module("sportsStore").controller("sportsStoreCtrl", function() {
  this.data = {
      products: [{
          name: "product #1",
          description: "A product",
          category: "category #1",
          price: 100
      }, {
          name: "product #2",
          description: "A product",
          category: "category #1",
          price: 110
      }, {
          name: "product #3",
          description: "A product",
          category: "category #2",
          price: 210
      }, {
          name: "product #4",
          description: "A product",
          category: "category #3",
          price: 202
      },
    ]
  }
});
