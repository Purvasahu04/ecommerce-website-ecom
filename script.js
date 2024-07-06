// script.js
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});


let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `${item.name} - Rs.${item.price}`;
        cartElement.appendChild(itemElement);
    });
    document.getElementById('total').textContent = `Rs.${total}`;
}


// JavaScript to handle form submission
document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    // Gather form data
    const formData = new FormData(this);
    // Send form data to server using AJAX
    fetch("/checkout", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Redirect to payment page or display payment options
      } else {
        // Handle error
      }
    })
    .catch(error => console.error("Error:", error));
  });

  