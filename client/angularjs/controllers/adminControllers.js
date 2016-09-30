angular.module("sportsStoreAdmin")
    .constant("authUrl", "http://localhost:3000/users/login")
    .constant("ordersUrl", "http://localhost:3000/orders")
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

        this.setScreen = function(index) {
            this.current = this.screens[index];
        };
        this.getScreen = function() {
            return this.current == "Products" ?
                "angularjs/views/adminProducts.html" :
                "angularjs/views/adminOrders.html";
        };
    })

    .controller("ordersCtrl", function($http, ordersUrl) {
      var self = this;

        $http.get(ordersUrl)
            .then(function(res) {
                self.orders = res.data;
            })
            .catch(function(error) {
                error = error;
            });
            self.selectedOrder;
        self.selectOrder = function(order) {
            this.selectedOrder = order;
        };

        self.calcTotal = function(order) {
            var total = 0;
            for (var i = 0; i < order.products.length; i++) {
                total += order.products[i].count * order.products[i].price;
            }
            return total;
        }
    })
