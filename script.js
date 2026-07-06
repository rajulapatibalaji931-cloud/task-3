const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        accordions.forEach((item) => {
            if (item !== this) {
                item.nextElementSibling.style.display = "none";
            }
        });
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function () {
    const email = document.querySelector(".email-box input").value.trim();
    if (email === "") {
        alert("Please enter your email address.");
    }
    else {
        alert("Welcome to Netflix!\n\nEmail: " + email);
    }
});
const signInBtn = document.querySelector(".signin-btn");
signInBtn.addEventListener("click", function () {
    alert("Sign In feature is not implemented.\nThis is only a UI Clone.");
});
const movies = document.querySelectorAll(".movie-row img");
movies.forEach((movie) => {
    movie.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.08)";
    });
    movie.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});
