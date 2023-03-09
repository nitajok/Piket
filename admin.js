// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
//klo humberger menu di klik
document.querySelector('#hamburger-menu');
onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar utk ksih keluar dari sidebar
const hamburger =  document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});