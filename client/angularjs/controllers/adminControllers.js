angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:3000/users/login")
    .controller("authCtrl", function($http, $location, authUrl) {
        var self = this;

        this.authenticate = function(user, pass) {
            $http.post(authUrl, {
                username: user,
                password: pass
            }, {
                withCredentials: true
            }).success(function(data) {
                $location.path("/main");

            }).error(function(error) {
                this.authenticateError = error;
            });
        }
    })

.controller("mainCtrl", function() {
    self.screens = ["Products", "Orders"];
    self.current = self.screens[0];

    self.setScreen = function(index){
      self.current = self.screens[index];
    };
self.getScreen = function() {
return self.current == "Products" ?
    "/angularjs/views/adminProducts.html" :
    "/angularjs/views/adminOrders.html";
  };
});
