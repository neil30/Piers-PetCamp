// Nav Bar Icon
const btns = document.querySelector('.btns');
const mobile_nav = document.querySelector('.mobile-menu');

btns.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');
});

// Nav Sticky
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})

// Nav Bar Text
const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.active").classList.remove("active");
    item.classList.add("active");
  });
});

// Auto Scroll
var elmnt = document.getElementById("info");
	function scrollToBottom() {
    elmnt.scrollIntoView(true);
}

var elmnt2 = document.getElementById("content");
	function scrollToBottom2() {
    elmnt2.scrollIntoView(true);
}

// Heart
function myFunction(x) {
  x.classList.toggle("fas");
}

// Textfield
$('input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });
  
  $('input').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('active');
    }
  });
  