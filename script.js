const tablinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const projectBtn = document.getElementById("projectBtn");
const hideWork = document.querySelectorAll(".hideWork");

// ---------- About Me ----------
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ---------- See More button ----------
projectBtn.addEventListener("click", () => {
    hideWork.forEach((el) => {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
            projectBtn.innerText = "See More"
        } else {
            el.classList.add("active");
            projectBtn.innerText = "Show Less"
        }
    });
});

// ------------ Menu ------------
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}