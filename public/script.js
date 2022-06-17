document.getElementsByClassName("close")[0].addEventListener("click", (e) =>
    {
       document.documentElement.style.setProperty("--close", "none");
    }
)
document.getElementsByClassName("menu-btn")[0].addEventListener("click", (e) =>
    {
       document.documentElement.style.setProperty("--close", "block");
    }
)