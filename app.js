// Header Sticky
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 120) {
        $('.navbar-area').addClass("is-sticky");
    } else {
        $('.navbar-area').removeClass("is-sticky");
    }
});
    

// Button Hover JS
$(function() {
    $('.default-btn')
        .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    })
    .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    });
  });


$('.img_container').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,  // Enable autoplay
    autoplayTimeout: 3000,  // Time between slides in milliseconds (3 seconds here)
    autoplayHoverPause: true,  // Pause on hover
    autoplaySpeed: 2000,  // Speed of transition between slides in milliseconds (1 second here)
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });


$(document).ready(function() {
  let currentIndex = 0;
  const tabs = $('.nav-link');
  const tabPanes = $('.tab-pane');
  const intervalTime = 3000; // 3 seconds

  function switchTab() {
      // Remove active class from all nav links and tab panes
      tabs.removeClass('active');
      tabPanes.removeClass('show active');

      // Add active class to the current nav link and tab pane
      tabs.eq(currentIndex).addClass('active');
      tabPanes.eq(currentIndex).addClass('show active');

      // Update current index
      currentIndex = (currentIndex + 1) % tabs.length;
  }

  // Set interval for switching tabs automatically
  setInterval(switchTab, intervalTime);
});


    // document.addEventListener('DOMContentLoaded', function() {
    //     const slider = document.querySelector('.clients-slider');
    //     const radios = document.querySelectorAll('.radioInput .radio');
    //     let currentIndex = 0;
    //     const totalSlides = radios.length;
    //     const slideWidth = 1320; // Adjust according to your gap and container width

    //     function moveSlider() {
    //         slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    //         radios.forEach((radio, index) => {
    //             radio.checked = index === currentIndex;
    //         });
    //     }

    //     function nextSlide() {
    //         currentIndex = (currentIndex + 1) % totalSlides;
    //         moveSlider();
    //     }

    //     let interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    //     radios.forEach((radio, index) => {
    //         radio.addEventListener('click', () => {
    //             clearInterval(interval);
    //             currentIndex = index;
    //             moveSlider();
    //             interval = setInterval(nextSlide, 3000); // Restart interval
    //         });
    //     });
    // });




// Best Services Slider JS
$(document).ready(function() {
  var bigimage = $("#best-services");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
      .owlCarousel({
          items: 1,
          slideSpeed: 2000,
          nav: true,
          autoplay: true,
          dots: false,
          nav: false,
          loop: true,
          responsiveRefreshRate: 200,
          navText: [
              '<i class="fa-solid fa-arrow-left"></i>',
              '<i class="flaticon-right-arrow"></i>'
          ]
      })
      .on("changed.owl.carousel", syncPosition);

  thumbs
      .on("initialized.owl.carousel", function() {
          thumbs
              .find(".owl-item")
              .eq(0)
              .addClass("current");
      })
      .owlCarousel({
          loop: false,
          dots: false,
          nav: true,
          autoplay: false,
          active: true,
          navText: [
              '<i class="fa-solid fa-arrow-left"></i>',
              '<i class="fa-solid fa-arrow-right"></i>'
          ],
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: 8,
          responsiveRefreshRate: 100,
          responsive: {
              0: {
                  items: 2
              },
              1024: {
                  items: 4
              },
              1200: {
                  items: 6
              }
          }
      })
      .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;

      //to disable loop, comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
          current = count;
      }
      if (current > count) {
          current = 0;
      }
      //to this
      thumbs
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs
          .find(".owl-item.active")
          .first()
          .index();
      var end = thumbs
          .find(".owl-item.active")
          .last()
          .index();

      if (current > end) {
          thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
          thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
  }

  function syncPosition2(el) {
      if (syncedSecondary) {
          var number = el.item.index;
          bigimage.data("owl.carousel").to(number, 100, true);
      }
  }

  thumbs.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
  });
});



// Clients Slider
$('.clients-slider').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
});