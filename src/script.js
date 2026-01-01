// Navbar-fixed 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
};


// Hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
    // Version plus simple qui s'exécute au chargement
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('section.bg-green-700 h2');
    
    statNumbers.forEach(stat => {
        const textContent = stat.textContent.trim();
        const numberPart = textContent.replace('+', '').replace(/\s+/g, '');
        const targetValue = parseInt(numberPart);
        
        if (!isNaN(targetValue)) {
            stat.textContent = '0+'; // Reset à 0
            
            setTimeout(() => {
                let currentValue = 0;
                const interval = setInterval(() => {
                    currentValue++;
                    stat.textContent = currentValue + '+';
                    
                    if (currentValue >= targetValue) {
                        clearInterval(interval);
                    }
                }, 50); // Ajustez la vitesse ici (plus petit = plus rapide)
            }, 300); // Délai avant le démarrage
        }
    });
});

	let currentIndex = 0;

			function scrollCarousel(direction) {
				const carousel = document.getElementById("carousel");
				const totalSlides = carousel.children.length;
				currentIndex =
					(currentIndex + direction + totalSlides) % totalSlides;
				carousel.style.transform = `translateX(-${
					currentIndex * 100
				}%)`;
			}
 const waBtn = document.getElementById('waBtn')
  const waList = document.getElementById('waList')
  let hideTimer = null

  function showWA() {
    waList.classList.remove('hidden')

    // reset timer
    clearTimeout(hideTimer)

    // auto hide setelah 5 detik
    hideTimer = setTimeout(() => {
      waList.classList.add('hidden')
    }, 8000)
  }

  function hideWA() {
    waList.classList.add('hidden')
    clearTimeout(hideTimer)
  }

  waBtn.addEventListener('click', (e) => {
    e.stopPropagation()

    if (waList.classList.contains('hidden')) {
      showWA()
    } else {
      hideWA()
    }
  })

  document.addEventListener('click', (e) => {
    if (!waList.contains(e.target) && !waBtn.contains(e.target)) {
      hideWA()
    }
  })

    AOS.init({
            duration: 1000,
            once: true,
        });

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".bg-gradient", {
            backgroundPosition: "100% 50%",
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        gsap.utils.toArray('section').forEach((section, index) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });
