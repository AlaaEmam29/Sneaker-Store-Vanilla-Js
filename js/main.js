"use strict"

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 119,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 100,
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];
  let randomProduct = products[0];
  
const mainSlider = document.querySelector(".wrapper-slider")
const navBtns = [...document.querySelectorAll(".links-container a")]
const productTitle = document.querySelector(".product-title")
const productPrice = document.querySelector(".product-price")
const productImg = document.querySelector(".img")
const colorsProduct =[...document.querySelectorAll(".color")]
const sizesProduct =[...document.querySelectorAll(".size")]
const buyBtn = document.querySelector("#buyBtn")
const sizes = document.querySelector(".sizes")
const payment = document.querySelector(".payment")

const btnClose = document.querySelector(".btnClose")
const navToggle = document.querySelector(".bars-icon")
const navList = document.querySelector(".links")
const navBottom = document.querySelector(".links-container")

document.addEventListener("DOMContentLoaded",function(){
    
})
navBtns.forEach((btn,index) => {
    btn.addEventListener("click", function(e) {
        e.preventDefault()
        mainSlider.style.transform = `translateX(-${index*100}vw)`;
        randomProduct = products[index];
        const {title,price,colors} = randomProduct;
        const {img} = colors[0];
         productImg.setAttribute("src",img);
         productTitle.textContent = title;
         productPrice.textContent = price;
        colorsProduct.forEach((color,index) => {
            const {code  } = colors[index];
            color.style.backgroundColor = code;
        })
       

    })
})

colorsProduct.forEach((color, index) => {
    color.addEventListener("click", function(){
        productImg.setAttribute("src",randomProduct.colors[index].img)
    });
  });

  sizes.addEventListener("click", function(e){
    if(e.target.classList.contains("size"))
    {
        sizesProduct.forEach(btn => {
            btn.classList.remove("bg-dark","text-white");
            e.target.classList.add("bg-dark","text-white");     
         })
    }
  })
  buyBtn.addEventListener("click", function(){
    payment.classList.replace("d-none","d-block")
  })
  
  btnClose.addEventListener("click", function(){
    payment.classList.replace("d-block","d-none")
  })

  navToggle.addEventListener("click", function(){
    const navHeight = navBottom.getBoundingClientRect().height
    const navListHeight = navList.getBoundingClientRect().height

if (navHeight == 0) {
  navBottom.style.cssText = `height:${navListHeight + 20}px !important`;
} else {
  navBottom.style.cssText = "height:0 !important";

}
  })

