const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)


function fixNav() {
    // gives the value of the scroll position on the Y axis
    console.log(window.screenY, nav.offsetHeight)

    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')   
    }
}