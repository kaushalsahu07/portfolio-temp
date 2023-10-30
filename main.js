// nav bar
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
// dark mode
let darkicon = document.getElementById("dark-btn");
let darks = document.getElementById("icons");
 
darkicon.onclick = function(){
  document.body.classList.toggle("dark-mode")
  if(darks.className == "fa-solid fa-moon"){
    darks.className = "fa-solid fa-sun";
  }else{
    darks.className = "fa-solid fa-moon";
  }
}
// gallery item filter
const filterButtons = document.querySelector("#button").children;
const items = document.querySelector(".my-works").children;

for (let i = 0; i < filterButtons.length; i++) {
	filterButtons[i].addEventListener("click", function() {
		for (let j = 0; j < filterButtons.length; j++) {
			filterButtons[j].classList.remove("works-active");
		}
		this.classList.add("works-active");
		const target = this.getAttribute("data-target");

		for (let k = 0; k < items.length; k++) {
			items[k].style.display = "none";
			if (target == items[k].getAttribute("data-id")) {
				items[k].style.display = "block";
			}
			if (target == "all") {
				items[k].style.display = "block";
			}
		}
	});
}

// scroll up
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
//nav active 
document.addEventListener("DOMContentLoaded", function() {
	// const navItems = navBar.getElementsByTagName("li");

	// loop through navigation items
	for (let i = 0; i < navLinks.length; i++) {
		// add click event listener to each item
		navLinks[i].addEventListener("click", function() {
			// remove active class from all items
			for (let j = 0; j < navLinks.length; j++) {
				navLinks[j].classList.remove("active-nav");
			}
			// add active class to selected item
			this.classList.add("active-nav");
		});
	}
});
// contact form
const contactForm = document.getElementById('contact-form'),
	contactMessage = document.getElementById('contact-message'),
	contactEmail = document.getElementById('contact-email');

const sendEmail = (e) => {
	e.preventDefault()
	emailjs.sendForm('service_axjwsjs', 'template_g063nj2', '#contact-form', 'AnwMl_zSAYOVxr07h')
		.then(() => {
			contactMessage.textContent = 'Message have sended ✅'

			setTimeout(() => {
				contactMessage.textContent = ''
			}, 5000)

			contactForm.reset()
		}, () => {
			contactMessage.textContent = 'Message not send (service error) ❌'
		})
}

contactForm.addEventListener('submit', sendEmail)