let menuItems = document.getElementsByClassName('nav-link');
let onClick = function (event) {
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
    menuItems[i].style.color = ''; 
  }
  
  event.currentTarget.classList.add('active');
  event.currentTarget.style.color = '#000000'; 
};

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', onClick, false);
}

window.addEventListener('load', function() {
    let currentPath = window.location.pathname;
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].getAttribute('href') === currentPath) {
            menuItems[i].classList.add('active');
            menuItems[i].style.color = '#000000';
            break;
        }
    }
});
