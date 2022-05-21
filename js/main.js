/*==================== MOSTRAR MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('c-show-menu')
        })
    }
}
showMenu('i-toggle','i-nav-menu')

/*==================== REMOVER MENU ====================*/
const navLink = document.querySelectorAll('.c-nav-link')
function linkAction(){
    const navMenu = document.getElementById('i-nav-menu')
    navMenu.classList.remove('c-show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== LINKS ACTIVOS ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.c-nav-menu a[href*=' + sectionId + ']').classList.add('c-active-link')
        }else{
            document.querySelector('.c-nav-menu a[href*=' + sectionId + ']').classList.remove('c-active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== AGREGAR BOX-SHADOW AL MENU ====================*/ 
function scrollNav(){
    const nav = document.getElementById('i-nav')
    if(this.scrollY >= 80) nav.classList.add('c-scroll-nav'); else nav.classList.remove('c-scroll-nav')
}
window.addEventListener('scroll', scrollNav)

/*==================== MOSTRAR SCROLLTOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('i-scrolltop');
    if(this.scrollY >= 300) scrollTop.classList.add('c-show-scroll'); 
    else scrollTop.classList.remove('c-show-scroll')
}
window.addEventListener('scroll', scrollTop)

// SWIPER PORTAFOLIO
let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});