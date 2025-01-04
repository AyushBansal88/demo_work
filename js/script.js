// ================================================
// script for header scroll Animation
// ================================================

function onscroll_header() {
  if (window.scrollY > 30) {
    header.classList.add('scroll_header');
	// banner.classList.add('scroll_header_padding');
  } else {
    header.classList.remove('scroll_header');
	// banner.classList.remove('scroll_header_padding');
  }
}

var header = document.querySelector('header');
// var banner = document.querySelector('.banner_section')
window.addEventListener("scroll", onscroll_header);
window.addEventListener("load", onscroll_header);


AOS.init();