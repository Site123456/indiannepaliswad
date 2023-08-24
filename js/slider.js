function loadmorecontentcall() {
var suggestion = [
    "<li class='option'>Voyez notre Carte</li>",
    ];
fetch("./json/all.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholderrecommendationnouser = document.querySelector("#loadmorecontentsuggestions");
   let recommendationnouser = "";
   for(let product of products){
    recommendationnouser += `<li class="option"><a href="${product.link}">${product.title} - ${product.price}&euro;</a></li>`;
   }
   placeholderrecommendationnouser.innerHTML = recommendationnouser;
    for (var i = placeholderrecommendationnouser.children.length; i >= 0; i--) {
        placeholderrecommendationnouser.appendChild(placeholderrecommendationnouser.children[Math.random() * i | 0]);
    }
});

}
setTimeout(() => {
    loadmorecontentcall();
}, 200);
const options = document.querySelector(".options"),
allOption = options.querySelectorAll(".option"),
arrowIcons = document.querySelectorAll(".icon12 i");

let isDragging = false, prevTouch, prevScroll;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = options.scrollWidth - options.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollWidth = options.scrollLeft += icon.id === "left" ? -350 : 350;
        handleIcons(scrollWidth);
    });
});

allOption.forEach(option => {
    option.addEventListener("click", () => {
        options.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

const dragStart = (e) => {
    isDragging = true
    prevTouch = e.pageX || e.touches[0].pageX;
    prevScroll = options.scrollLeft;
};

const dragging = e => {
    if(!isDragging) return;
    options.classList.add("dragging");
    options.scrollLeft = prevScroll - ((e.pageX || e.touches[0].pageX) - prevTouch);
    handleIcons(options.scrollLeft);
}

const stopDragging = () => {
    isDragging = false;
    options.classList.remove("dragging");
}

options.addEventListener("mousedown", dragStart);
options.addEventListener("touchstart", dragStart);
options.addEventListener("mousemove", dragging);
options.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", stopDragging);
const options1 = document.querySelector(".options1"),
allOption1 = options1.querySelectorAll(".option1"),
arrowIcons1 = document.querySelectorAll(".icon121 i");

let isDragging1 = false, prevTouch1, prevScroll1;

const handleIcons1 = (scrollVal1) => {
    let maxScrollableWidth = options1.scrollWidth - options1.clientWidth;
    arrowIcons1[0].parentElement.style.display = scrollVal1 <= 0 ? "none" : "flex";
    arrowIcons1[1].parentElement.style.display = maxScrollableWidth > scrollVal1 ? "flex" : "none";
}

arrowIcons1.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollWidth = options1.scrollLeft += icon.id === "left1" ? -350 : 350;
        handleIcons1(scrollWidth);
    });
});

allOption1.forEach(option1 => {
    option1.addEventListener("click", () => {
        options1.querySelector(".active").classList.remove("active");
        option1.classList.add("active");
    });
});

const dragStart1 = (e) => {
    isDragging1 = true
    prevTouch1 = e.pageX || e.touches[0].pageX;
    prevScroll1 = options1.scrollLeft;
};

const dragging1 = e => {
    if(!isDragging1) return;
    options1.classList.add("dragging1");
    options1.scrollLeft = prevScroll1 - ((e.pageX || e.touches[0].pageX) - prevTouch1);
    handleIcons1(options1.scrollLeft);
}

const stopDragging1 = () => {
    isDragging1 = false;
    options1.classList.remove("dragging1");
}

options1.addEventListener("mousedown", dragStart1);
options1.addEventListener("touchstart", dragStart1);
options1.addEventListener("mousemove", dragging1);
options1.addEventListener("touchmove", dragging1);
document.addEventListener("mouseup", stopDragging1);
options1.addEventListener("touchend", stopDragging1);
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    rewind: true,
    on: {
        autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});
particlesJS("particles-js", {
    "particles": {
		"number": {
			"value": 100,
			"density": {
				"enable": true,
				"value_area": 600
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 140,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
}); 