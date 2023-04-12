const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const button = event.target;
  const product = button.parentElement;
  const productTitle = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('p').textContent;
  const cartItems = document.querySelector('#cart ul');
  const cartItemNames = cartItems.querySelectorAll('h3');
  const cartItem = document.createElement('li');
  const cartItemImage = document.createElement('img');
  const cartItemTitle = document.createElement('h3');
  const cartItemPrice = document.createElement('p');

  cartItemImage.src = product.querySelector('img').src;
  cartItemTitle.textContent = productTitle;
  cartItemPrice.textContent = productPrice;

  cartItem.appendChild(cartItemImage);
  cartItem.appendChild(cartItemTitle);
  cartItem.appendChild(cartItemPrice);

  cartItems.appendChild(cartItem);
  

  }

