
import JustValidate from 'just-validate';


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,

    nav: true,          // вмикає стрілки
    navText: [
      '  <div class="icon-left-dir owl-prev"></div>',
      '   <div class="icon-right-dir owl-prev"></div>'],

    responsive: {
      0: {
        items: 1,
        // margin: 5
      },
      1200: {
        items: 3,
        margin: 5
      },
      1920: {
        items: 3,
        margin: 35
      },

    }

  });
});

const burger = document.querySelector(".icon-menu"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  document.body.style.overflow = "";
});


try {


  const tabs = document.querySelectorAll(".catalog__tab");
  window.content = document.querySelectorAll(".catalog__card");
  // Задаємо, які картки показуються для кожної вкладки
  const visibleItemsMap = {
    0: [0, 1, 2, 3, 4],    // Перша вкладка — показати 0, 1, 2
    1: [3, 4, 2],       // Друга — 3, 4
    2: [0, 3], // Третя — 5, 6, 7, 8
    // і т.д.
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

      // 1. Прибираємо активні класи з усіх вкладок
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));

      // 2. Приховуємо всі контентні блоки
      content.forEach((c) => c.style.display = "none");

      // 3. Додаємо активний клас до обраної вкладки
      tab.classList.add("catalog__tab_active");

      // 4. Показуємо відповідні картки з контентом
      const visibleIndexes = visibleItemsMap[index] || [];

      visibleIndexes.forEach((i) => {
        if (content[i]) content[i].style.display = "block";
      });
    });
  });

  // Початковий стан: перша вкладка активна
  tabs[0].classList.add("catalog__tab_active");
  content.forEach((c, i) => {
    c.style.display = visibleItemsMap[0].includes(i) ? "block" : "none";
  });


} catch (e) { }


try {

  const validator = new JustValidate('.touch__form');

  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязково для заповнення',

      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Мінімальна кількість символів: 2',

      },

    ])

    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязково для заповнення',

      },

      {
        rule: 'email',
        errorMessage: 'Введіть коректну пошту',

      },
    ])

    .addField('#question', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязково для заповнення',

      },

    ],
      {
        errorsContainer:
          document.querySelector("#question").parentElement.querySelector(".error-message"),

      },

    )

    .addField('#checkbox', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязково для заповнення',

      },

    ],

      {
        errorsContainer:
          document.querySelector("#checkbox").parentElement.parentElement.querySelector(".checkbox-error-label"),

      },

    )



} catch (e) { }


try {

  const validatorFoot = new JustValidate('.footer__form');

  validatorFoot

    .addField('#footer-input', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязково для заповнення',

      },


      {
        rule: 'email',
        errorMessage: 'Введіть коректну пошту',

      },

    ],
      {
        errorsContainer:
          document.querySelector("#footer-input").parentElement.querySelector(
            ".footer-input-error-label"),
      })



    .addField('#footer-checkbox', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязково для заповнення',

      },

    ],
      {
        errorsContainer:
          document.querySelector("#footer-checkbox").parentElement.parentElement.querySelector(
            ".footer-checkbox-error-label"),
      })

} catch (e) { }


$('form').submit(function (e) {

  e.preventDefault();


  $.ajax({

    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()

  }).done(function () {

    $(this).find("input").val("");

    $('form').trigger('reset');

  });

  return false;

});


// try {


//   const validatorFoot = new JustValidate('.touch__form');

//   validatorFoot

//     .addField('#footer-input', [
//       {
//         rule: 'required',
//         errorMessage: 'Це поле обовязково для заповнення',

//       },


//       {
//         rule: 'email',
//         errorMessage: 'Введіть коректну пошту',

//       },

//     ],
//       {
//         errorsContainer:
//           document.querySelector("#question-about").parentElement.querySelector(
//             ".touch__about-error-label-textarea"),
//       })


//       .addField('#footer-checkbox', [
//       {
//         rule: 'required',
//         errorMessage: 'Це поле обовязково для заповнення',

//       },

//     ],
//       {
//         errorsContainer:
//           document.querySelector("#footer-checkbox").parentElement.parentElement.querySelector(
//             ".footer-checkbox-error-label"),
//       })

// } catch (e) { }


