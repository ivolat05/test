import Swiper from "swiper/bundle";
function menuControll() {
	const btnControllAll = document.querySelectorAll(".header__controll-btn");
	const html = document.querySelector("html");
	const menu = document.querySelector(".header__nav");
	if (btnControllAll) {
		btnControllAll.forEach((btn) => {
			btn.addEventListener("click", () => {
				if (btn.classList.contains("header__open-menu")) {
					menuOpen(html, menu);
				} else {
					menuClose(html, menu);
				}
			});
		});
	}
}
menuControll();
function menuOpen(html, menu) {
	html.classList.add("--stop-scroll");
	menu.classList.add("--active");
}
function menuClose(html, menu) {
	html.classList.remove("--stop-scroll");
	menu.classList.remove("--active");
}

function swipermain() {
	const swiperTopWrapp = document.querySelector(".main-swiper-head");
	const swiperBodyWrapp = document.querySelector(".main__swiper-body");
	const allSlideTop = swiperTopWrapp.querySelectorAll(".swiper-slide");
	const numerIntialSlideTop = allSlideTop.length - 1;
	const swiperBacground = document.querySelector(".main__background-swiper");
	let header = document.querySelector(".header");
	const swiperBody = new Swiper(swiperBodyWrapp, {
		slidesPerView: 4,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			600: {
				slidesPerView: 2,
			},
			800: {
				slidesPerView: 3,
			},

			1100: {
				slidesPerView: 4,
			},
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});
	const swiperTop = new Swiper(swiperTopWrapp, {
		spaceBetween: 10,
		initialSlide: numerIntialSlideTop,
		speed: 1500,
		effect: "fade",
		thumbs: {
			swiper: swiperBody,
		},
	});
	const swiperBack = new Swiper(swiperBacground, {
		spaceBetween: 10,
		initialSlide: numerIntialSlideTop,
		speed: 1500,
		effect: "fade",
	});

	swiperTop.on("slideChange", function () {
		swiperBack.slideTo(swiperTop.activeIndex);
		if (
			!allSlideTop[swiperTop.activeIndex].classList.contains(
				"--start-slide"
			)
		) {
			header.classList.add("--line-white");
		} else {
			header.classList.remove("--line-white");
		}
	});
	swiperBody.on("slideChange", function () {
		swiperTop.slideTo(swiperBody.activeIndex);
	});
}
swipermain();
