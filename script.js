// ==============================
// MOBILE MENU
// ==============================

function toggleMenu() {

    const menu =
        document.getElementById("navLinks");

    menu.classList.toggle("show");

}


// ==============================
// CLOSE MENU AFTER CLICKING LINK
// ==============================

const links =
    document.querySelectorAll("#navLinks a");

links.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            document
                .getElementById("navLinks")
                .classList
                .remove("show");

        }
    );

});
