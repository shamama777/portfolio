Fancybox.bind("[data-fancybox]", {})

const burger = document.querySelector('.header__burger')






burger.addEventListener('click', () => {
   document.body.classList.toggle('active')
})

const headerLinks = document.querySelectorAll('.header__link')

headerLinks.forEach(link => {
   link.addEventListener('click', () => document.body.classList.remove('active'))
})





const mixer = mixitup('.works__gallery')

