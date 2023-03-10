const navbar = document.querySelector(".navbar");

window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add('navbar-solid');
    } else {
        navbar.classList.remove('navbar-solid');
    }

    if (window.innerWidth > 916 && window.scrollY > 2050) {
        document.title = "Contact | Michael Garcia";
    }
    else if (window.innerWidth <= 916 && window.scrollY > 2700) {
        document.title = "Contact | Michael Garcia";
    }
    else if (window.scrollY > 1500) {
        document.title = "Projects | Michael Garcia";
    }
    else if (window.scrollY > 600) {
        document.title = "About Me | Michael Garcia";
    }
    else if (window.scrollY > 0) {
        document.title = "Home | Michael Garcia";
    }
};