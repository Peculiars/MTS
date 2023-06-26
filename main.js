var activePage = window.location.href;
var nav_link = document.querySelectorAll('.nav-link');
nav_link.forEach(function(link){
	if (link.href === activePage){
		link.classList.add('nav-link-active')
	}
})