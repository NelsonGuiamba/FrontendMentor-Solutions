// selectors
numberInput = document.querySelector('[data-id="number-input"]');
plusBtn = document.querySelector('[data-id="plus-btn"]');
minusBtn = document.querySelector('[data-id="minus-btn"]');
mainImg = document.querySelector(".main_product>img");
thumbnails = document.querySelectorAll(".sub_products>img");
cartImg = document.querySelector(".cart-img");
cartDrop = document.querySelector(".dropbox");
addBtn = document.querySelector(".add-btn");
cartItems = document.querySelector(".cart-content");
cartCount = document.querySelector(".item-count");
cartEmpty = document.querySelector(".cart-empty");
cartItem = document.querySelector(".cart-item").cloneNode(true);
deleteBtn = document.querySelector(".delete-cart");
closeModal = document.querySelector('.close-modal')
modal = document.querySelector('.modal')
nextBtn = document.querySelector('.nextBtn')
prevBtn = document.querySelector('.prevBtn')
lightbox_thumbs = modal.querySelectorAll('.sub-imgs>.sub-img>img')
store = [];
lightbox = 1;
thumbnailFocused = 1;
// event listeners
plusBtn.addEventListener("click", (event) => {
  n = Number(numberInput.value);
  if (n <= 9) numberInput.value = n + 1;
});

minusBtn.addEventListener("click", (event) => {
  n = Number(numberInput.value);
  if (n >= 1) numberInput.value = n - 1;
});

thumbnails.forEach((element) => {
  element.addEventListener("click", (event) => {
    url = element.dataset["url"];
    mainImg.src = `images/image-product-${url}.jpg`;
    thumbnails[thumbnailFocused - 1].classList.remove("focused");
    if (!element.classList.contains("focused"))
      element.classList.toggle("focused");
    thumbnailFocused = Number(url);
  });
});

cartImg.addEventListener("click", (event) => {
  if (store.length > 0) {
    if (!cartEmpty.classList.contains("hidden"))
      cartEmpty.classList.toggle("hidden");
    if (cartItems.classList.contains("hidden"))
      cartItems.classList.toggle("hidden");
  } else {
    if (cartEmpty.classList.contains("hidden"))
      cartEmpty.classList.toggle("hidden");
    if (!cartItems.classList.contains("hidden"))
      cartItems.classList.toggle("hidden");
  }
  while (cartItems.lastElementChild)
    cartItems.removeChild(cartItems.lastElementChild);
  for (let item of store) {
    qtd = cartItem.querySelector('[data-id="qtd"]');
    result = cartItem.querySelector('[data-id="result"]');

    qtd.innerText = item;
    result.innerText = item * 125;
    cartItem.querySelector(".delete-cart").addEventListener("click", (event) => {
      cartItem.remove()
    })

    cartItems.appendChild(cartItem);
    cartItem = cartItem.cloneNode(true);
  }
  b = document.createElement("button");
  b.innerText = "Checkout";
  cartItems.appendChild(b);
  cartDrop.classList.toggle("hidden");
});

cartImg.addEventListener("focusout", () => {
  cartDrop.classList.toggle("hidden");
});
addBtn.addEventListener("click", (event) => {
  if (!Number(numberInput.value) == 0) {
    store.push(numberInput.value);
    numberInput.value = 0;

    cartCount.innerText = store.length;
    if (cartCount.classList.contains("hidden"))
      cartCount.classList.toggle("hidden");
  }
});

deleteBtn.addEventListener("click", (event) => {
  console.log(this);
});

closeModal.addEventListener("click", (event) => {
 modal.classList.toggle('hidden') 
  for(element of modal.querySelectorAll('.focused'))
    element.classList.remove('focused')
})


mainImg.addEventListener('click', (event) => {
  modal.classList.toggle('hidden')
  modal.querySelector('.main-img>img').src = mainImg.src
  lightbox = thumbnailFocused;
  currentThumb  = modal.querySelector('.sub-imgs')
  currentThumb.children[lightbox - 1].querySelector('img').classList.add("focused")

})

prevBtn.addEventListener('click', (event) => {
  currentThumb  = modal.querySelector('.sub-imgs')
  currentThumb.children[lightbox - 1].querySelector('img').classList.remove("focused")
  
  if(lightbox == 1)
    lightbox = 4
  else
    lightbox = lightbox - 1
  modal.querySelector('.main-img>img').src = `images/image-product-${lightbox}.jpg`;
  currentThumb.children[lightbox - 1].querySelector('img').classList.add("focused")

})
nextBtn.addEventListener('click', (event) => {
  currentThumb  = modal.querySelector('.sub-imgs')
  currentThumb.children[lightbox - 1].querySelector('img').classList.remove("focused")
  
  if(lightbox == 4)
    lightbox = 1
  else
    lightbox = lightbox + 1
  modal.querySelector('.main-img>img').src = `images/image-product-${lightbox}.jpg`;
  currentThumb.children[lightbox - 1].querySelector('img').classList.add("focused")

})

for(let i = 0; i<lightbox_thumbs.length; i++){
  lightbox_thumbs[i].addEventListener('click', (event) => {
  currentThumb  = modal.querySelector('.sub-imgs')
  currentThumb.children[lightbox - 1].querySelector('img').classList.remove("focused")
    lightbox = i + 1;
  currentThumb.children[lightbox - 1].querySelector('img').classList.add("focused")
  modal.querySelector('.main-img>img').src = `images/image-product-${lightbox}.jpg`;
  })
}
// on start
