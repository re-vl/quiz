var logic = false;

let questions = [];
var element_arr = "Пусто";
var myarr = new Array();

let question_1 = "Пусто";
let question_2 = "Пусто";
let question_3 = "Пусто";
let question_4 = "Пусто";
let question_5 = "Пусто";
let question_6 = "Пусто";

let phone;
let fio;

var params = window.location.search
   .replace("?", "")
   .split("&")
   .reduce(function (p, e) {
      var a = e.split("=");
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
   }, {});

var istochnik = params["utm_source"];
var keyword = params["utm_term"];
var dataset = "Не с рекламы";

if (params["utm_source"] == "yandex" || params["utm_source"] == "google") {
   dataset =
      "Источник: " +
      params["utm_source"] +
      " ключевое слово: " +
      params["utm_term"];
}

jQuery(window).scroll(function () {
   var windowScrollTop = jQuery(this).scrollTop();

   if (windowScrollTop > 60) {
      jQuery("#menu-vk").addClass("menu-fix");
   } else {
      jQuery("#menu-vk").removeClass("menu-fix");
   }
});

jQuery(document).on("ready", function () {
   jQuery(".progress-bar").html("15%");
   jQuery(".progress-bar").css({ width: "15%" });

   jQuery(".autoplay").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 2000,
      variableWidth: true,
      prevArrow:
         '<button id="prev" type="button" class="btn-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
      nextArrow:
         '<button id="next" type="button" class="btn-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ],
   });
});

jQuery(".type4").click(function () {
   jQuery(".type4").removeClass("type4-check");
   myarr = [];
   if (jQuery(this).find("input")[0].checked == true) {
      jQuery(this).find("input")[0].checked = false;
      jQuery(this).removeClass("type4-check");

      i = myarr.indexOf(jQuery(this).find("input")[0].value);
      if (i >= 0) {
         myarr.splice(i, 1);
      }
      logic = false;
   } else {
      jQuery(this).addClass("type4-check");
      jQuery(this).find("input")[0].checked = true;
      myarr.push(jQuery(this).find("input")[0].value);

      logic = true;
   }
});

jQuery(".type-input").click(function () {
   jQuery(".type4").removeClass("type4-check");
   jQuery(".karta").attr("checked", false);
   myarr = [];
   jQuery(this).addClass("type4-check");
});

jQuery(".karta").click(function () {
   myarr = [];
   if (jQuery(this)[0].checked == true) {
      jQuery(this)[0].checked = false;
      jQuery(this).parent().removeClass("type4-check");
      i = myarr.indexOf(jQuery(this).parent().find("input")[0].value);
      if (i >= 0) {
         myarr.splice(i, 1);
      }

      logic = false;
   } else {
      jQuery(this).parent().addClass("type4-check");
      jQuery(this)[0].checked = true;
      myarr.push(jQuery(this).parent().find("input")[0].value);

      logic = true;
   }
});

jQuery(".questions_step1").click(function () {
   element_arr = jQuery(this).find("p")[0].innerText;

   jQuery(this).children("button").addClass("btn-none-check");
   jQuery(this).children("p").addClass("active-block");

   for (var i in questions) {
      if (questions[i] == element_arr) {
         questions.splice(i, 1);
         break;
      }
   }

   questions.push(jQuery(this).find("p")[0].innerText);

   if (questions.length >= 1) {
      logic = true;
   } else {
      logic = false;
   }

   console.log(questions);
   return false;
});

jQuery(".questions_step4").click(function () {
   element_arr = jQuery(this).find("p")[0].innerText;

   jQuery(this).children("button").addClass("btn-none-check");
   jQuery(this).children("p").addClass("active-block");

   for (var i in questions) {
      if (questions[i] == element_arr) {
         questions.splice(i, 1);
         break;
      }
   }

   questions.push(jQuery(this).find("p")[0].innerText);

   if (questions.length >= 1) {
      logic = true;
   } else {
      logic = false;
   }

   console.log(questions);
   return false;
});

jQuery(".btn-none").on("click", function () {
   element_arr = jQuery(this).siblings("p")[0].innerText;

   jQuery(this).siblings("p").removeClass("active-block");
   jQuery(this).removeClass("btn-none-check");

   for (var i in questions) {
      if (questions[i] == element_arr) {
         questions.splice(i, 1);
         break;
      }
   }

   if (questions.length >= 1) {
      logic = true;
   } else {
      logic = false;
   }

   console.log(questions);
   return false;
});

jQuery("#btn1").on("click", function () {
   if (logic) {
      jQuery(".progress-bar").html("30%");
      jQuery(".progress-bar").css({ width: "30%" });

      question_1 = questions;

      jQuery(".step1").hide();
      jQuery(".step2").show();

      logic = false;
      questions = [];
      return false;
   } else {
      jQuery("#error").html("Выберите один или несколько вариантов!");
      jQuery("#modal-1").modal();
      return false;
   }
});

//Кнопка назад
jQuery("#btn-back2").on("click", function () {
   jQuery(".progress-bar").html("15%");
   jQuery(".progress-bar").css({ width: "15%" });

   jQuery(".questions_step1").children("button").removeClass("btn-none-check");
   jQuery(".questions_step1").children("p").removeClass("active-block");
   jQuery(".type4").removeClass("type4-check");
   jQuery(".karta").attr("checked", false);

   jQuery(".step2").hide();
   jQuery(".step1").show();

   logic = false;
   questions = [];
   return false;
});

jQuery("#btn2").on("click", function () {
   let variant2 = jQuery("#variant2").val();

   if (logic) {
      jQuery(".progress-bar").html("45%");
      jQuery(".progress-bar").css({ width: "45%" });

      if (variant2) {
         question_2 = variant2;
      } else {
         question_2 = myarr;
      }

      jQuery(".step2").hide();
      jQuery(".step3").show();

      logic = false;
      myarr = [];
      return false;
   } else {
      jQuery("#error").html("Выберите один или несколько вариантов!");
      jQuery("#modal-1").modal();
      return false;
   }
});

//Кнопка назад
jQuery("#btn-back3").on("click", function () {
   jQuery(".progress-bar").html("30%");
   jQuery(".progress-bar").css({ width: "30%" });

   jQuery(".questions_step1").children("button").removeClass("btn-none-check");
   jQuery(".questions_step1").children("p").removeClass("active-block");
   jQuery(".type4").removeClass("type4-check");
   jQuery(".karta").attr("checked", false);

   jQuery(".step3").hide();
   jQuery(".step2").show();

   logic = false;
   questions = [];
   return false;
});

jQuery("#btn3").on("click", function () {
   let variant3 = jQuery("#variant3").val();

   if (logic) {
      jQuery(".progress-bar").html("45%");
      jQuery(".progress-bar").css({ width: "45%" });

      if (variant3) {
         question_3 = variant3;
      } else {
         question_3 = myarr;
      }

      jQuery(".step3").hide();
      jQuery(".step4").show();

      logic = false;
      myarr = [];
      return false;
   } else {
      jQuery("#error").html("Выберите один или несколько вариантов!");
      jQuery("#modal-1").modal();
      return false;
   }
});

jQuery("#btn4").on("click", function () {
   let variant4 = jQuery("#variant4").val();

   if (logic) {
      jQuery(".progress-bar").html("60%");
      jQuery(".progress-bar").css({ width: "60%" });

      if (variant4) {
         question_4 = variant4;
      } else {
         question_4 = myarr;
      }

      jQuery(".step4").hide();
      jQuery(".step5").show();

      logic = false;
      myarr = [];
      return false;
   } else {
      jQuery("#error").html("Выберите один или несколько вариантов!");
      jQuery("#modal-1").modal();
      return false;
   }
});

jQuery("#btn5").on("click", function () {
   let variant5 = jQuery("#variant5").val(),
      question_val = "Подарок не нужен";

   if (logic) {
      jQuery(".progress-bar").html("100%");
      jQuery(".progress-bar").css({ width: "100%" });

      if (variant5) {
         question_5 = variant5;
      } else {
         question_5 = myarr;
      }

      if (question_5 != question_val) {
         jQuery("#bonus").html("Ваш подарок </br>" + question_5);
      } else {
         jQuery("#bonus").html(question_5);
      }

      jQuery(".step5").hide();
      jQuery(".step6").show();

      logic = false;
      myarr = [];
      return false;
   } else {
      jQuery("#error").html("Выберите один или несколько вариантов!");
      jQuery("#modal-1").modal();
      return false;
   }
});

jQuery("#btn6").on("click", function () {
   phone = jQuery("#phone-1").val();
   fio = jQuery("#name-1").val();

   if (phone.length > 5) {
      jQuery(".step6").hide();
      jQuery(".step7").show(500);

      var msg = {
         question1: JSON.stringify(question_1),
         question2: JSON.stringify(question_2),
         question3: JSON.stringify(question_3),
         question4: JSON.stringify(question_4),
         question5: JSON.stringify(question_5),
         fio: fio,
         phone: phone,
         dataset: dataset,
      };
      jQuery.ajax({
         type: "POST",
         url: "ok.php",
         data: msg,
         success: function (data) {
            console.log("почта отправлена!");
            //ym(68422018,'reachGoal','yes');
            // gtag('event', 'conversion', {
            //     'send_to': 'AW-511696691/pHZcCK7Jo-QBELO-__MB',
            //     'event_callback': callback
            // });
            return false;
         },
         error: function (xhr, str) {
            console.log("2");
         },
      });

      questions = [];
      return false;
   } else {
      jQuery("#error").html("Заполните контактные даные!");
      jQuery("#modal-1").modal();
      return false;
   }
});
