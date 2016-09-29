angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:3000/users/login")
    .controller("authCtrl", function($http, $location, authUrl) {
        var self = this;

        this.authenticate = function(user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }).then(function(data) {
                $location.path("/main");

            }).catch(function(error) {
                self.authenticateError = error;
            });
        }
    })
.controller("mainCtrl", function() {
    this.screens = ["Products", "Orders"];
    this.current = this.screens[0];

    this.setScreen = function(index){
      this.current = this.screens[index];
    };
this.getScreen = function() {
return this.current == "Products" ?
    "angularjs/views/adminProducts.html" :
    "angularjs/views/adminOrders.html";
  };
});
