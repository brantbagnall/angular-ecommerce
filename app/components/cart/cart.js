angular.module('ecommerce').component('cart', {
    templateUrl:'./app/components/cart/cart.html',
    controller: function(cartSrvc){
        this.cart = cartSrvc.getCart();
        this.total = cartSrvc.getTotal;
    },
    controllerAs:'ct'
})