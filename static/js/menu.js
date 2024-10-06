let menuItems = document.getElementsByClassName('nav-link');
let onClick = function (event) {
	
  
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
	}
  
  event.currentTarget.classList.add('active');
};

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', onClick, false);
}
