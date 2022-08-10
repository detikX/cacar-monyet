// alert(1);

// $(window).scroll(function () {
//   //zoom
//   var top = $(window).scrollTop(),
//     scale = top / 2000;
//   $(".inner").css({
//     transform: "scale(" + scale + "," + scale + ")",
//     "-webkit-transform": "scale(" + scale + "," + scale + ")",
//   });

//   var scroll = $(window).scrollTop();
//   // console.log(scroll);
//   var header = $("header");
//   return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
//   // }
// });

$(() => {
  $(window).on("load", function () {
    $(".preloader").fadeOut(10000);
    $(".preloader").remove();
  });
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
    // alert(1);
  });

  if ($(window).width() > 768) {
    // $(".m-menu").click(() => {
    // });
  }

  function count($this) {
    var current = parseInt($this.html(), 10);
    if (!$this.data("isCounting") && current < $this.data("count")) {
      $this.html(++current);
      $this.data("isCounting", true);
      setTimeout(function () {
        $this.data("isCounting", false);
        count($this);
      }, 1);
    }
  }

  $(".count").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("28200");
    $(this).data("isCounting", false);
  });

  function startCount() {
    $(".count").each(function () {
      count($(this));
    });
  }
  startCount();
});

$(".category-airline").click(function () {
  var id = $(this).attr("id");
  var toShow = "#show-" + id;
  $(".airline-content").not(toShow).hide();
  $(toShow).fadeIn("slow");
  if ($(".detail-refund").children().hasClass("close-info")) {
    $(toShow)
      // .removeClass("close-info")
      .addClass("open")
      .slideDown(function () {
        $("html, body").animate({
          scrollTop: $(".refund").offset().top + 20,
        });
      });
    console.log("harus slide");
  }
  // $(".detail-refund ul li.category-detail").removeClass("activeMenu");
  // $(".detail-refund ul li.category-detail:first-child").addClass("activeMenu");
  // $(".wrapper-box").css("display", "none");
  // $(".wrapper-box:first-child").css("display", "block");
});

$(".closer").click(() => {
  $(".airline-content").removeClass("open").addClass("close-info");
  $(".airline-content") /*.fadeOut()*/
    .slideUp();
});
