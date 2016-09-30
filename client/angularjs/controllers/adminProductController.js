angular.module("sportsStoreAdmin")
    .constant("productUrl", "http://localhost:3000/products/")
    .config(function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
    .controller("productCtrl", function($resource, productUrl) {
        var self = this;
        this.productsResource = $resource(productUrl + ":id", {
            id: "@_id"
        });
        this.listProducts = function() {
            this.products = this.productsResource.query();
        }
        this.deleteProduct = function(product) {
            product.$delete().then(function() {
                self.products.splice(self.products.indexOf(product), 1);
            });
        }
        this.createProduct = function(product) {
            new self.productsResource(product).$save().then(function(newProduct) {
                self.products.push(newProduct);
                self.editedProduct = null;
            });
        }
        this.updateProduct = function(product) {
            product.$save(); //this is throwing an error
            this.editedProduct = null;
        }
        this.startEdit = function(product) {
            this.editedProduct = product;
        }
        this.cancelEdit = function() {
            this.editedProduct = null;
        }
        this.listProducts();
    });
