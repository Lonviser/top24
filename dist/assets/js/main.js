console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(2)
console.log(3)

    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".salesSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });



      var btn = document.querySelector('.humburger');
      btn.onclick = function(e) {
        var element = document.querySelector(".sideber__content");
        if(element.classList.contains("show-block")) {
          element.classList.remove("show-block");
        } else {
          element.classList.add("show-block");
        }
      }