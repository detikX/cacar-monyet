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

$(window).on("load", function () {
  $(".preloader").fadeOut(10000);
  $(".preloader").remove();
});
$(() => {
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

  /*
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
  */
});

$.ajax({
  url: "https://raw.githubusercontent.com/owid/monkeypox/main/owid-monkeypox-data.csv",
  dataType: "text",
  beforeSend: function(){
    $(".loading").show();
    $('.dataapi').hide();
  },
  complete: function(){
      $(".loading").hide();
      $('.dataapi').show();
  },
  success: (response) => {
    /* console.log(response) */
    var api_ = $.csv.toObjects(response);
    var a;
    // console.log(api_[api_.length - 1]);
    // for (a = 0; a < api_.length; a++) {
    var world = api_[api_.length - 3];
    console.log(world);
    var date_ = world.date;
    var newCase = world.new_cases;
    var total_cases = world.total_cases;
    
    var adeath = world.total_deaths;
    var death = parseFloat(adeath.replace(/,/g, ""));

    var monthWording = {
      "01": "Januari",
      "02": "Februari",
      "03": "Maret",
      "04": "April",
      "05": "Mei",
      "06": "Juni",
      "07": "Juli",
      "08": "Agustus",
      "09": "September",
      "10": "Oktober",
      "11": "November",
      "12": "Desember",
    };
    var year = date_.slice(0, 4);
    var month = date_.slice(5, 7);
    var day = date_.slice(8, 10);
    console.log(day);
    var parseMont = (monthWording[month]);
    var parse = parseFloat(total_cases.replace(/,/g, ""));
    var parseTotal = parseInt(parse);
    var finalTotal = parseTotal.toLocaleString("id")
    var parseCase = parseFloat(newCase.replace(/,/g, ""));
    var parseIntCase = parseInt(parseCase);
    var finalCase = parseIntCase.toLocaleString("id")
    $(".kasusbaru").text(finalTotal);
    $(".nambah").text(finalCase);
    $(".die").text(death);
    $(".tanggalnya").text(`${day} ${parseMont} ${year}`);
    // console.log("new case", newCase);
    // console.log("total", total_cases);
    // console.log("death", death);
    // if (world) {
    //   var data_ = api_[a].date;
    //   console.log(typeof data_);
    // }
    // }
  },
});

$(".category-airline").click(function () {
  var id = $(this).attr("id");
  var toShow = "#show-" + id;
  console.log(toShow);
  $(".airline-content").not(toShow).hide();
  $(toShow).fadeIn("slow");
  $(".twox").show();

  if ($(".detail-refund").children().hasClass("open")){
    $(toShow).removeClass("open").addClass("close-info").slideDown(function(){
      $('html, body').animate({
            scrollTop: $(".refund").offset().top + 20
        });
    });
    console.log("harus fade")
  }

  if ($(".detail-refund").children().hasClass("close-info")) {
    $(toShow)
      .removeClass("close-info")
      .addClass("open")
      .slideDown(function () {
        $("html, body").animate({
          scrollTop: $(".refund").offset().top + 20,
        });
      });
    console.log("harus slide");
  }

  $('.detail-refund ul li.category-detail').removeClass("activeMenu");
  $('.detail-refund ul li.category-detail:first-child').addClass("activeMenu");
  // $('.wrapper-box').css("display","block");
  $('.wrapper-box').css("display","none");
  $(toShow).children('.wrapper-box').first().css("display","block")
});

$('.detail-refund ul li.category-detail').click(function() {
  var id = $(this).attr('id');
  var toShow = '#show-' + id;
  $('.wrapper-box').not(toShow).hide();
  $(toShow).fadeIn().removeAttr('hidden');
});

$('.detail-refund ul li.category-detail').click(function() {
  $('.detail-refund ul li.category-detail').removeClass("activeMenu");
        $(this).addClass("activeMenu");
});

$(".closer").click(() => {
  $(".airline-content").removeClass("open").addClass("close-info");
  $(".twox").fadeOut();
  $(".airline-name").removeClass("bg-category");
  $(".airline-content") /*.fadeOut()*/
    .slideUp();
});

$(".category-click .airline-name").click(function () {
  $(".category-click .airline-name").removeClass("bg-category");
  $(this).addClass("bg-category");
});
