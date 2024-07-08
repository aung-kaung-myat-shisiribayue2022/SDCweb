document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const clearCartButtons = document.querySelectorAll('.clear-cart');
    const shoppingCartIcon = document.querySelector('.shopping-cart-icon');

    let itemCount = parseInt(sessionStorage.getItem('cartItemCount')) || 0;

    function updateCartCount() {
        shoppingCartIcon.textContent = itemCount; // Update the content of the shopping cart icon
        sessionStorage.setItem('cartItemCount', itemCount);
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            itemCount++;
            updateCartCount();
        });
    });

    clearCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            itemCount = 0;
            updateCartCount();
            localStorage.removeItem('shoppingItems');
        });
    });

    updateCartCount();
});
