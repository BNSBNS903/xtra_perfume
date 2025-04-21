// home.js
document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.getElementById("navbar-placeholder");
    if (navPlaceholder) {
        fetch("navbar.html")
            .then(response => response.text())
            .then(data => {
                navPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Error loading navbar:", error));
    }
});