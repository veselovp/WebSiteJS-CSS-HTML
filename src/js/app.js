import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

// funkcija proverajet mobilka ili net 
let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};


// chtobi vsjo zagruzilosj a potom toka funkcija 
window.onload = function () {



    document.addEventListener('click', documentAction);

// dobavlajem hoverr na element cerez navedenije 
    function documentAction(e) {
        const targetElement = e.target;
        // proverajet mobila ili net
        if (isMobile.any()) {
            // proverajet soderzit li class
            if (targetElement.classList.contains('menu__arrow')) {
                // perekljucajet na blizajwij roditeljskij object object s imenem
                targetElement.closest('.menu__item').classList.toggle('open');
            }
        }
        if (targetElement.contains('products__more')) {
            console.log('hhhh');
            getProducts(targetElement);
            e.preventDefault();
        }
    }

// delaju javaskript na knopku lupu chto otkrivalsj poisk pri menjwe 981 px
}

// sozdaju elementi togo chto nado pomenatj i knopku dejstvija
let page = document.querySelector('.search-form')
let lupa = document.querySelector('.icon-magnifying-glass');

// funkcija pri nazatiji 
lupa.onclick = function () {
    page.classList.toggle('dlinna')
};



let icon = document.querySelector('.icon-menu');
let peremenaja = document.querySelector('.menu__body');

icon.onclick = function () {
    console.log('hz')
    peremenaja.classList.toggle('burger')
};





// spoiler novij


document.querySelectorAll('.splr').forEach((e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('splr')) {
            // perekljucajet na blizajwij roditeljskij object object s imenem
            e.closest('.spoiler-father').classList.toggle('open');
            console.log('estj');
        }
    })
})


// swiper


var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	effect: "fade",
	navigation: {
		nextEl: ".swiper-button-next2",
		prevEl: ".swiper-button-prev2",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
	

// zagruzka productov

async function get 