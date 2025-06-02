var openBtn = document.querySelector("#open_btn");
var navBarUl = document.querySelector(".nav_bar ul");
var closeBtn = document.querySelector("#close_btn");
var menuFullOverlay = document.querySelector(".menu_full_overlay");


openBtn.addEventListener(
  "click",
  function () {
    navBarUl.classList.add("open")
    menuFullOverlay.classList.add("menufulloverlayshow")
    openBtn.className = 'fa-solid fa-xmark';
    var fa_xmark = document.querySelector('.fa-xmark');
    fa_xmark.style.fontSize = '30px';
  }
)
menuFullOverlay.addEventListener(
  "click",
  function () {
    openBtn.className = 'fa-solid fa-bars';
    navBarUl.classList.remove("open");
    menuFullOverlay.classList.remove("menufulloverlayshow");
    openBtn.style.fontSize = '25px';

  }
)
document.addEventListener(
  "scroll",
  function () {
    if (window.scrollY > 49) {
      document.body.classList.add("stick")
    } else {
      document.body.classList.remove("stick")

    }
  }
)


$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

var opnButton = document.querySelectorAll(".opn-btn")
var dishesAccordionContainer = document.querySelectorAll(".dishes_accordion_container")


opnButton.forEach(
  function(value,index){
    value.addEventListener(
      "click",
      function(){
        opnButton.forEach(
          function(vlue,i){
            if(index==i){
              dishesAccordionContainer[i].classList.add("showing")
              opnButton[i].classList.add("focus_effects")
            }else{
              dishesAccordionContainer[i].classList.remove("showing")
              opnButton[i].classList.remove("focus_effects")
            }
          }
        )
      }
    )
  }
)