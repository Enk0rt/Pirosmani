document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
   const dropdownContent = document.querySelector(".dropdown-content");
   const wrapperVisibility = document.querySelector(".wrapper");

    dropdown.addEventListener("mouseover", function () {
       dropdownContent.style.display = "block";
       document.querySelector(".header").classList.add("header-is-active");
    });

    dropdown.addEventListener("mouseout", function () {
       dropdownContent.style.display = "none";
       document.querySelector(".header").classList.remove(".header-is-active");
    });

    dropdownContent.addEventListener("mouseover", function () {
       dropdownContent.style.display = "block";
       document.querySelector(".header").classList.add("header-is-active");
    });

    dropdownContent.addEventListener("mouseout", function () {
       dropdownContent.style.display = "none";
       document.querySelector(".header").classList.remove("header-is-active");
    });

    dropdownContent.addEventListener("click", function (event) {
        if (event.target.tagName === 'LI') {
            dropdownContent.style.display = "none";
            document.querySelector(".header").classList.remove("header-is-active");
        }
    });
});