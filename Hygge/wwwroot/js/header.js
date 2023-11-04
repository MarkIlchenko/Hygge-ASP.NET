const toggleButton = document.querySelectorAll(".navbar-toggler");
const myNavBar = document.querySelector(".nav-bg");
const toggleList = document.querySelectorAll(".js-navbar-collapse");

toggleButton.forEach(item => {
    item.addEventListener("click", () => {
        toggleList.forEach(element => {
            element.classList.toggle("js-navbar-collapse");
            element.classList.toggle("open-modal");
            myNavBar.classList.toggle("bg-white");
        });
    })
})

window.onscroll = function() {myFunction()};

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


