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
    'Vintage Brown': {
      '40*24 Inch': 'img/RDVB40_24.jpg',
      '48*24 Inch': 'img/RDVB48_24.jpg',
      '55*28 Inch': 'img/RDVB55_28.jpg',
      '63*28 Inch': 'img/RDVB63_28.jpg',
    },
    'Espresso': {
      '40*24 Inch': 'img/RDE40_24.jpg',
      '48*24 Inch': 'img/RDE48_24.jpg',
      '55*28 Inch': 'img/RDE55_28.jpg',
      '63*28 Inch': 'img/RDE63_28.jpg',
    },
    'Natural': {
      '40*24 Inch': 'img/RDN40_24.jpg',
      '48*24 Inch': 'img/RDN48_24.jpg',
      '55*28 Inch': 'img/RDN55_28.jpg',
      '63*28 Inch': 'img/RDN63_28.jpg',
    },
    'Black': {
      '40*24 Inch': 'img/RDB40_24.jpg',
      '48*24 Inch': 'img/RDB48_24.jpg',
      '55*28 Inch': 'img/RDB55_28.jpg',
      '63*28 Inch': 'img/RDB63_28.jpg',
    },
    'White': {
      '40*24 Inch': 'img/RDW40_24.jpg',
      '48*24 Inch': 'img/RDW48_24.jpg',
      '55*28 Inch': 'img/RDW55_28.jpg',
      '63*28 Inch': 'img/RDW63_28.jpg',
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
    'Vintage Brown': {
      '40*24 Inch': { original: 500, discount: 400 },
      '48*24 Inch': { original: 600, discount: 550 },
      '55*28 Inch': { original: 700, discount: 600 },
      '63*28 Inch': { original: 800, discount: 650 },
    },
    'Espresso': {
      '40*24 Inch': { original: 500, discount: 400 },
      '48*24 Inch': { original: 600, discount: 550 },
      '55*28 Inch': { original: 700, discount: 600 },
      '63*28 Inch': { original: 800, discount: 650 },
    },
    'Natural': {
      '40*24 Inch': { original: 500, discount: 400 },
      '48*24 Inch': { original: 600, discount: 550 },
      '55*28 Inch': { original: 700, discount: 600 },
      '63*28 Inch': { original: 800, discount: 650 },
    },
    'Black': {
      '40*24 Inch': { original: 500, discount: 400 },
      '48*24 Inch': { original: 600, discount: 550 },
      '55*28 Inch': { original: 700, discount: 600 },
      '63*28 Inch': { original: 800, discount: 650 },
    },
    'White': {
      '40*24 Inch': { original: 500, discount: 400 },
      '48*24 Inch': { original: 600, discount: 550 },
      '55*28 Inch': { original: 700, discount: 600 },
      '63*28 Inch': { original: 800, discount: 650 },
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

  const clearCartButton = document.getElementById('clear-cart');
  const cartCount = document.getElementById('cart-count-main');
  
  let itemCount = parseInt(sessionStorage.getItem('cartItemCount')) || 0;

  function updateCartCount() {
    cartCount.textContent = itemCount;
    sessionStorage.setItem('cartItemCount', itemCount);
  }


  addToCartButton.addEventListener('click', function() {
    itemCount++; 
    updateCartCount();


  });


  clearCartButton.addEventListener('click', function() {
    itemCount = 0; 
    updateCartCount(); 
    localStorage.removeItem('shoppingItems');
  });

  updateCartCount();
});
