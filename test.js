let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

var modal = document.getElementById("myModal");

   
    var btn = document.getElementsByTagName("button")[0];

   
    var span = document.getElementsByClassName("close")[0];

   
    function openModal() {
        modal.style.display = "block";
    }

    
    function closeModal() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }



     

      document.addEventListener('DOMContentLoaded', function() {
        const colorButtons = document.querySelectorAll('.color-btn');
        const sizeButtons = document.querySelectorAll('.size-btn');
        const productImg = document.getElementById('product-img');
        const productColor = document.getElementById('product-color');
        const productSize = document.getElementById('product-size');
      
        const colorToImage = {
        
          'Black': {
              '47*23 Inch':'img/RDBN47_23.jpg',
              '60*27 Inch':'img/RDBN60_27.jpg',
          },
          'Walnut': {
              '47*23 Inch':'img/RDWN47_23.jpg',
              '60*27 Inch':'img/RDWN60_27.jpg',
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
              '47*23 Inch': { original: 800, discount: 700 },
              '60*27 Inch': { original: 1200, discount: 1000 },
          },
          'Walnut': {
            '47*23 Inch': { original: 800, discount: 700 },
            '60*27 Inch': { original: 1200, discount: 1000 },
           
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
        const addToCartButtons = document.querySelectorAll('.mybtn');
        const cartCount = document.getElementById('cart-count');
        const clearCartButton = document.getElementById('clear-cart');
    
        let itemCount = parseInt(sessionStorage.getItem('cartItemCount')) || 0;
    
        function updateCartCount() {
            cartCount.textContent = itemCount;
            sessionStorage.setItem('cartItemCount', itemCount);
        }
    
        addToCartButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                itemCount++;
                updateCartCount();
            });
        });
    
        updateCartCount();
    });