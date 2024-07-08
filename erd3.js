let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
document.addEventListener('DOMContentLoaded', function() {
  const colorButtons = document.querySelectorAll('.color-btn');
  const sizeButtons = document.querySelectorAll('.size-btn');
  const productImg = document.getElementById('product-img');
  const productColor = document.getElementById('product-color');
  const productSize = document.getElementById('product-size');

  const colorToImage = {
  
    'Black': {
        '32 Inch': 'img/TO32BN.jpg',
        '32 Inch Classic': 'img/TO32CBN.jpg',
        '37 Inch': 'img/TO37BN.jpg',
        '42 Inch': 'img/TO42BN.jpg',
    },
    'White': {
        '32 Inch': 'img/TO32WN.jpg',
        '32 Inch Classic': 'img/TO32UN.jpg',
        '37 Inch': 'img/TO37WN.jpg',
        '42 Inch': 'img/TO32UN.jpg',
    },
    'Wood': {
        '32 Inch': 'img/TO32WON.jpg',
        '32 Inch Classic': 'img/TO32UN.jpg',
        '37 Inch': 'img/TO37WON.jpg',
        '42 Inch': 'img/TO32UN.jpg',
    },
   
  };

  
  colorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const color = button.getAttribute('data-color');
      const size = getSelectedSize();
      updateProductImage(color, size);
    
      productColor.textContent = `Color: ${color}`;
    
      colorButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

 
  sizeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const size = button.getAttribute('data-size');
      const color = getSelectedColor();
      updateProductImage(color, size);
    
      productSize.textContent = `Size: ${size}"`;
      
      sizeButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

 
  function getSelectedColor() {
    const selectedColorButton = document.querySelector('.color-btn.selected');
    return selectedColorButton ? selectedColorButton.getAttribute('data-color') : null;
  }

  function getSelectedSize() {
    const selectedSizeButton = document.querySelector('.size-btn.selected');
    return selectedSizeButton ? selectedSizeButton.getAttribute('data-size') : null;
  }

  
  function updateProductImage(color, size) {
    const imagePath = colorToImage[color][size];
    productImg.src = imagePath;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const colorButtons = document.querySelectorAll('.color-btn'); 
  const sizeButtons = document.querySelectorAll('.size-btn');
  const productImg = document.getElementById('product-img');
  const productColor = document.getElementById('product-color');
  const productSize = document.getElementById('product-size');
  const originalPrice = document.getElementById('original-price');
  const discountPrice = document.getElementById('discount-price');

  const colorToPrice = {
  
    'Black': {
        '32 Inch': { original:550 , discount: 400 },
        '32 Inch Classic': { original:700, discount: 550 },
        '37 Inch': { original:800 , discount:700  },
        '42 Inch': { original:900 , discount:800 },
    },
    'White': {
        '32 Inch': { original:550 , discount: 400 },
        '32 Inch Classic': { original:0, discount: 0 },
        '37 Inch': { original:800 , discount:700  },
        '42 Inch': { original:0 , discount:0 },
    },
    'Wood': {
        '32 Inch': { original:550 , discount: 400 },
        '32 Inch Classic': { original:0, discount: 0 },
        '37 Inch': { original:800 , discount:700  },
        '42 Inch': { original:0 , discount:0 },
    },

  };


  colorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const color = button.getAttribute('data-color');
      const size = getSelectedSize();
      updateProductDetails(color, size);
      updateProductImage(color, size);
     
      colorButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  sizeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const size = button.getAttribute('data-size');
      const color = getSelectedColor();
      updateProductDetails(color, size);
      updateProductImage(color, size);
    
      sizeButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  
  function getSelectedColor() {
    const selectedColorButton = document.querySelector('.color-btn.selected');
    return selectedColorButton ? selectedColorButton.getAttribute('data-color') : null;
  }

 
  function getSelectedSize() {
    const selectedSizeButton = document.querySelector('.size-btn.selected');
    return selectedSizeButton ? selectedSizeButton.getAttribute('data-size') : null;
  }

  
  function updateProductDetails(color, size) {
    const prices = colorToPrice[color][size];
    originalPrice.textContent = `Original Price: $${prices.original}`;
    discountPrice.textContent = `Discount Price: $${prices.discount}`;
  }

 
  function updateProductImage(color, size) {
    const imagePath = colorToImage[color][size];
    productImg.src = imagePath;
  }
});
function showProductDetails() {
  var details = document.getElementById("productDetails");
  if (details.style.display === "none") {
      details.style.display = "block";
  } else {
      details.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButton = document.getElementById('mybtn1');
  const cartCount = document.getElementById('cart-count-main');
  const clearCartButton = document.getElementById('clear-cart');


  let itemCount = parseInt(sessionStorage.getItem('cartItemCount')) || 0;

  function updateCartCount() {
    cartCount.textContent = itemCount;
    sessionStorage.setItem('cartItemCount', itemCount);
  }


  addToCartButton.addEventListener('click', function() {
    itemCount++; 
    updateCartCount(); 


  });

  function toggleCart() {
    var cartContainer = document.getElementById("cart-container");
    if (cartContainer.style.display === "none") {
      cartContainer.style.display = "block";
    } else {
      cartContainer.style.display = "none";
    }
  }
  function addToCart() {
  
  }
  
  

  clearCartButton.addEventListener('click', function() {
    itemCount = 0; 
    updateCartCount();
    localStorage.removeItem('shoppingItems'); 
  });


  
  updateCartCount();
});
