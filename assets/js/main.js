/*===== MENU =====*/
const triggerMenu = document.querySelector('#trigger-menu'),
	mobileMenuCon = document.querySelector('#menu-mobile-container'),
	closeMenu = document.querySelector('#menu-mobile-container .dark-part')

triggerMenu.addEventListener('click', () => {
	mobileMenuCon.classList.add('active')
})

closeMenu.addEventListener('click', () => {
	mobileMenuCon.classList.remove('active')
})

// Testimonial Carousel
const nextBtn = document.querySelector('#testimonial .next'),
	prevBtn = document.querySelector('#testimonial .prev'),
	items = document.querySelectorAll('#testimonial .testimonial-item')

let times = items.length
let count = 1

nextBtn.addEventListener('click', () => {
	if (count >= times) {
		count = 1
		items[0].style.marginLeft = '0'
	} else {
		items[0].style.marginLeft = `-${items[0].offsetWidth * count}px`
		count++
	}
})
prevBtn.addEventListener('click', () => {
	if (count === 1) {
		items[0].style.marginLeft = `-${items[0].offsetWidth * (times - 1)}px`
		count = times
	} else {
		items[0].style.marginLeft = `-${
			items[0].offsetWidth * (count - 1) - items[0].offsetWidth
		}px`
		count--
	}
})
/*===== Go to top button =====*/
let gotoup = document.getElementById('gotoup')
;(window.onscroll = function () {
	document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
		? gotoup.classList.add('active')
		: gotoup.classList.remove('active')
}),
	gotoup.addEventListener('click', () => {
		;(document.body.scrollTop = 0), (document.documentElement.scrollTop = 0)
	})

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.logo', {
	opacity: 0,
	duration: 1,
	delay: 0.5,
	y: 10,
})
gsap.from('.menu-icon', {
	opacity: 0,
	duration: 1,
	delay: 0.7,
	y: 10,
})
gsap.from('.desktop-menu ul li', {
	opacity: 0,
	duration: 1,
	delay: 0.6,
	y: 30,
	stagger: 0.2,
})
// Sections
gsap.from('.section > *', {
	opacity: 0,
	duration: 0.7,
	delay: 1,
	y: 30,
	stagger: 0.2,
})
