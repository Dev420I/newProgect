
/*=========== SHOW MENU=======*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if (navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }




if (navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }


/*=========== SCROLL HEADER=======*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=========== SCROLL HEADER=======*/

function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=========== HOME SWIPER=======*/

let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop:'true'
});

/*=========== SERVICES=======*/
const tabs = document.querySelectorAll('[data-target]'),
       tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('services__active')
        })

        target.classList.add('services__active')

        tabs.forEach(tab => {
            tab.classList.remove('services__active')
        })

        tab.classList.add('services__active')
    })
})