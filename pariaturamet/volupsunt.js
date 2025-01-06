document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");
    const changeButton = document.getElementById("changeButton");

    changeButton.addEventListener("click", function() {
        app.textContent = "The content has been changed!";
    });
});
