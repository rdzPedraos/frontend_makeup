const links = document.querySelectorAll(".header__nav .active-link");
const transitionContainer = document.getElementById("transitionContainer");

window.onload = function () {
    transitionContainer.classList.add("slide-back");
};

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        transitionContainer.classList.remove("slide-back");
        transitionContainer.classList.add("slide-in");
        console.log(e);
        setTimeout(() => {
            window.location = link.href;
        }, 1000);
    });
});
