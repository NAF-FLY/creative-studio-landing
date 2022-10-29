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
/*===== GSAP ANIMATION =====*/
// NAV

// Hero

// About
