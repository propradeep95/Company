

$("#customers-testimonials").owlCarousel({
  loop: true,
  center: true,
  items: 4,
  margin: 30,
  autoplay: true,
  dots: true,
  nav: true,
  autoplayTimeout: 8500,
  smartSpeed: 450,
  navText: [
    "<i class=&quot;fa fa-angle-left&quot;></i>",
    "<i class=&quot;fa fa-angle-right&quot;></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },

    768: {
      items: 2,
    },

    1170: {
      items: 4,
    },
  },
});
$("#customers-testimonials2").owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      "<i class=&quot;fa fa-angle-left&quot;></i>",
      "<i class=&quot;fa fa-angle-right&quot;></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
  
      768: {
        items: 2,
      },
  
      1170: {
        items: 4,
      },
    },
  });
$("#customers-testimonials3").owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      "<i class=&quot;fa fa-angle-left&quot;></i>",
      "<i class=&quot;fa fa-angle-right&quot;></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
  
      768: {
        items: 2,
      },
  
      1170: {
        items: 4,
      },
    },
  });
$("#customers-testimonials4").owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      "<i class=&quot;fa fa-angle-left&quot;></i>",
      "<i class=&quot;fa fa-angle-right&quot;></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
  
      768: {
        items: 2,
      },
  
      1170: {
        items: 4,
      },
    },
  });
$("#customers-testimonials5").owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      "<i class=&quot;fa fa-angle-left&quot;></i>",
      "<i class=&quot;fa fa-angle-right&quot;></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
  
      768: {
        items: 2,
      },
  
      1170: {
        items: 4,
      },
    },
  });
$("#customers-testimonials6").owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 30,
    autoplay: true,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      "<i class=&quot;fa fa-angle-left&quot;></i>",
      "<i class=&quot;fa fa-angle-right&quot;></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
  
      768: {
        items: 2,
      },
  
      1170: {
        items: 4,
      },
    },
  });

$(".btn-b").on("click", function () {

  $(".btn-b").removeClass('active');
  $(this).addClass('active');
  var bt = $(this).data("id");
  $(".test").hide();
  $("." + bt).show();
});
