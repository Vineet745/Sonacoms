
// mouse
let mousecircle=document.querySelector(".mouse-circle")
let loader =document.querySelector(".loader")


window.addEventListener("mousemove",function(dets){
  let x=dets.pageX;
  let y=dets.pageY;


  this.setTimeout(function(){
    mousecircle.style.left= x +"px"
    mousecircle.style.top= y +"px"

  },100)
})




setTimeout(function(){
 loader.style.transform="translateY(-110%)"

},2800)



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper('.mySwiperlast', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

// page1
let tl1=gsap.timeline()

tl1.from(".page1-textdiv p",{
  opacity:0,
  y:-100,
  duration:1
})
tl1.from(".page1-textdiv button",{
  opacity:0,
  duration:1
})


$(".page1-textdiv h1").textillate({
  in:{
    effect:"fadeInRight",
  },
  loop:true,
  out:{
    effect:"fadeOutRight",

  }
})

$(".page1-textdiv2 h1").textillate({
  in:{
    effect:"fadeInRight",

  },
  loop:true,
  out:{
    effect:"fadeOutRight"
  }
})

$(".page1-textdiv3 h1").textillate({
  in:{
    effect:"fadeInRight",
  },
  loop:true,
  out:{
    effect:"fadeOutRight"
  }
})

















// page2


let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top 50%",
  },
})
tl2.from(".page2-top", {

  opacity: 0,
  duration: 1
})

tl2.from(".page2-center", {

  opacity: 0,
  duration: 1
})

// page3

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    start: "top 50%",
  },
})
tl3.from(".page3-left", {
  x: -700,
  duration: 0.5,

})

tl3.from(".page3-right h5", {
  opacity: 0
})
tl3.from(".page3-right h1", {
  opacity: 0,
  onStart: function () {
    $('.page3-right h1').textillate({
      in: {
        effect: 'fadeInRight', delay: 5
      }

    })
  }
})
tl3.from(".page3-right button", {
  opacity: 0
})
tl3.from(".page3-right-bottom", {
  x: 600,
  opacity: 0
})


gsap.from(".page3-right p", {
  scrollTrigger: {
    trigger: ".page3",
    start: "top 50%"
  },
  opacity: 0,
  onStart: function () {
    $('.page3-right p').textillate({
      in: {
        effect: 'fadeInRight', delay: 3
      }

    })
  }

})

// page4

gsap.from(".overlay-4 h1", {
  scrollTrigger: {
    trigger: ".page4",
    start: "top 10%"
  },
  opacity: 0,
  onStart: function () {
    $('.overlay-4 h1').textillate({
      in: {
        effect: 'fadeInRight', delay: 10
      }

    })
  }

})
gsap.from(".page4-top", {
  scrollTrigger: {
    trigger: ".page4",
    start: "top 70%"
  },
  opacity:0,
  duration: 2,
})


gsap.from(".small-slider", {
  scrollTrigger: {
    trigger: ".page4",
    start: "top 10%",
  },
  x: 600,
  duration: 2,
})

gsap.from(".counting", {
  scrollTrigger: {
    trigger: ".page4",
    start: "top 10%"
  },
  rotate: 360,
  duration: 2,
  x: -500,
})

// page5
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page5",
    start: "top 30%"

  }
})

tl5.from(".page5-top", {
  opacity: 0
})
tl5.from(".mySwiperlast", {
  opacity: 0,
  duration: 1
})
tl5.from(".page5button", {
  y: 100
})

let cross = document.querySelector('.cross')
let mediaNav = document.querySelector('.media-nav')
let hamberger = document.querySelector('.ri-menu-line')


hamberger.addEventListener('click',function(){
  mediaNav.style.transform = 'translateX(0%)';
})

cross.addEventListener('click',function(){
  mediaNav.style.transform = "translateX(100%)"
})







