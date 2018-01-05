var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
<<<<<<< HEAD
  var itemPrice = Math.random;
=======
  var itemPrice = 0;
>>>>>>> 3d5692bf5369e4ba1b171a6c7a6c9d9178e955a7
  cart.push({ [itemName]: itemPrice});
}

function placeOrder() {

}

function total() {}
