document.addEventListener('DOMContentLoaded', () => {

    // --- PORTFOLIO PROJECTS DATA ---
    // You can easily add your new websites/projects here!
    // Just copy an existing block, paste it at the end, and change the details.
    const projectsData = [
        {
            title: "Floranest",
            image: "plant.png",
            description: "Floranest is a mobile-based e-commerce application designed for buying and selling plants online. The app connects plant sellers with customers and provides a smooth platform to browse plants, view details, and place orders easily.",
            colorTheme: "emerald", // Available colors: 'brand', 'purple', 'emerald', 'red', 'blue', 'orange'
            delay: "", // Animation delay. Keep empty or use "delay-100" for staggering cards
            githubLink: "https://github.com/mcord2002/Hotel.git",
            liveLink: "https://vt.tiktok.com/ZSmWkQWHg/",
            tags: ["Mobile App", "E-commerce"]
        },
        {
            title: "Teaching / Tuition Experience",
            image: "class.png",
            description: "I conduct tuition classes for school students, helping them understand subjects clearly and improve their academic performance. This experience has strengthened my communication, leadership, and problem-solving skills.",
            colorTheme: "emerald", 
            delay: "", 
            githubLink: "https://github.com/mcord2002/Hotel.git",
            liveLink: "https://vt.tiktok.com/ZSmvFhPyh/",
            tags: ["Mobile App", "E-commerce"]
        },
        {
            title: "Café Experience – Cafe Freshbrew",
            image: "cafe.png",
            description: "I gained hands-on experience working at Cafe Freshbrew, supporting daily café operations, handling customer orders, and helping maintain service quality. This experience improved my teamwork, communication, and customer service skills in a real working environment.",
            colorTheme: "emerald", 
            delay: "", 
            githubLink: "https://github.com/mcord2002/Hotel.git",
            liveLink: "https://vt.tiktok.com/ZSmvFhPyh/",
            tags: ["Mobile App", "E-commerce"]
        },
        {
            title: "Food Management Experience",
            image: "food.png",
            description: "I have experience assisting in café food management, including handling customer orders, supporting daily operations, and maintaining service quality. This role helped me develop teamwork, responsibility, and customer service skills in a fast-paced environment.",
            colorTheme: "emerald", 
            delay: "", 
            githubLink: "https://github.com/mcord2002/Hotel.git",
            liveLink: "https://vt.tiktok.com/ZSmvFhPyh/",
            tags: ["Mobile App", "E-commerce"]
        },
          {
            title: "Hotel Management System",
            image: "hotel.png",
            description: "I developed a Hotel Management System to streamline hotel operations such as room booking, customer management, and payment handling. This project helped me gain experience in system design, database management, and building user-friendly interfaces.",
            colorTheme: "emerald", 
            delay: "", 
            githubLink: "https://github.com/mcord2002/Hotel.git",
            liveLink: "https://vt.tiktok.com/ZSmvFhPyh/",
            tags: ["Mobile App", "E-commerce"]
        }
    ];

    // Render Projects Dynamically
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsData.forEach((project, index) => {
            // Setup Links HTML
            let linksHTML = '';
            if (project.githubLink) {
                linksHTML += `
                    <a href="${project.githubLink}" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-${project.colorTheme}-500 hover:text-white transition-all text-gray-400">
                        <i class="fa-brands fa-github"></i>
                    </a>`;
            }
            if (project.liveLink) {
                linksHTML += `
                    <a href="${project.liveLink}" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-${project.colorTheme}-500 hover:text-white transition-all text-gray-400">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>`;
            }

            // Setup Tags HTML
            const tagsHTML = project.tags.map(tag =>
                `<span class="text-xs font-semibold px-3 py-1 bg-${project.colorTheme}-500/10 text-${project.colorTheme}-400 rounded-full border border-${project.colorTheme}-500/20">${tag}</span>`
            ).join('');

            // Generate Project Card HTML
            const projectCard = `
                <div class="glass-card rounded-2xl overflow-hidden group reveal ${project.delay}">
                    <div class="project-img-wrapper h-48 sm:h-56 md:h-64 w-full relative">
                        <div class="absolute inset-0 bg-${project.colorTheme}-900/40 mix-blend-overlay group-hover:bg-transparent transition-colors z-10"></div>
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover top-object" onerror="this.src='https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=800&auto=format&fit=crop'">
                    </div>
                    <div class="p-6 md:p-8 relative z-20">
                        <div class="flex items-center justify-between mb-4">
                            <h4 class="text-xl md:text-2xl font-bold text-white group-hover:text-${project.colorTheme}-400 transition-colors">${project.title}</h4>
                            <div class="flex gap-2">
                                ${linksHTML}
                            </div>
                        </div>
                        <p class="text-gray-400 mb-6 text-sm md:text-base">${project.description}</p>
                        <div class="flex flex-wrap gap-2">
                            ${tagsHTML}
                        </div>
                    </div>
                </div>`;

            projectsContainer.innerHTML += projectCard;
        });
    }

    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const icon = btn.querySelector('i');

    // Handle mobile menu toggle with both click and touch events
    const toggleMenu = () => {
        menu.classList.toggle('hidden');
        if (menu.classList.contains('hidden')) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    };

    btn.addEventListener('click', toggleMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !btn.contains(e.target) && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active Navigation Link Update on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Scroll Reveal Animation via Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Remove observer once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Fix viewport height for mobile devices (address bar issue)
    const setVH = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    // Improve touch scroll performance on mobile
    if ('ontouchstart' in window) {
        document.body.style.cursor = 'pointer';
    }

});
