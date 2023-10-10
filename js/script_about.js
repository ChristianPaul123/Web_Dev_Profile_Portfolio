
$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 50){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 50){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

      // slide-up script
      $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
var typed1 = new Typed(".typing-2", {
        strings: ["BU Student", "Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
});

//portfolio
// Select relevant HTML elements
var filterButtons = document.querySelectorAll("#filter-buttons button");
var filterableCards = document.querySelectorAll("#filterable-cards .card-tabs");

// Function to filter cards based on filter buttons
var filterCards = (e) => {
document.querySelector("#filter-buttons .active").classList.remove("active");
e.target.classList.add("active");

filterableCards.forEach(card => {
    // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
    if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
        return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
});
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

    // owl carousel script
$('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
});

return 0;
});