var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-phablet');
var menuContainer = document.querySelector('#main-menu-phablet');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}
