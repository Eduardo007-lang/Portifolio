const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');


button.addEventListener('click', function(){
    mobileNavbar.classList.toggle('active');
})


window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 0) {
        return navbar.classList.add('active');
    }
    return navbar.classList.remove('active');
})


$(document).ready(function() {
    $(".customer-logos").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 768, // Tamanho de tela onde o slider terá apenas 2 slides
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480, // Tamanho de tela onde o slider terá apenas 1 slide
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });
  