// Slick initialization for "Best sellers" section
$(document).ready(function() {
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendArrows: $(".carousel-arrows"),
    prevArrow: "<img class='left-arrow' src='./img/left-arrow.png'>",
    nextArrow: "<img class='right-arrow' src='./img/right-arrow.png'>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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

  // Slick initialization for "Hot tours" section
  $(".hot-tours-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,

    prevArrow:
      '<img class="arrow-circle-prev" src="./img/arrow-in-circle-prev.png" alt="prev">',
    nextArrow:
      '<img class="arrow-circle-next" src="./img/arrow-in-circle-next.png" alt="next">',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
});

// Making inputs and selects bold font after change
let inputField = document.querySelectorAll("input");
inputField.forEach(item => {
  item.onblur = () => {
    item.style.fontWeight = "600";
  };
});
let selectField = document.querySelectorAll("select");
selectField.forEach(item => {
  item.onchange = () => {
    item.style.fontWeight = "600";
  };
});

// Video thumbnail cover
let posterButton = document.querySelector(".poster i");
let poster = document.querySelector(".poster");

posterButton.onclick = () => {
  poster.style.display = "none";
};
