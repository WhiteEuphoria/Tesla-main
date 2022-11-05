// (function($) {
//     $.widget('custom.phonecode', {
//         options: {
//             default_prefix: '',
//             prefix: '',
//             preferCo: 'ru'
//         },
//         _create: function() {

//         },
//     });
// })(jQuery);
const burgerBtn = document.querySelector(".burger");
const burgerClose = document.querySelector(".nav-menu__wrapp");


burgerBtn.addEventListener("click", function (){   

    document.querySelector(".burger").classList.toggle("burger--active");

    document.querySelector(".nav-menu").classList.toggle("nav-menu--active");

 
});

burgerClose.addEventListener("click", function (){   

    document.querySelector(".burger").classList.toggle("burger--active");

    document.querySelector(".nav-menu").classList.toggle("nav-menu--active");

});