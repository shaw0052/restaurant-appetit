//------------- Burger Menu ------------------------

// når brugeren trykker på menubotton:
// skift/toggle klassen "hidden" på nav

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPaaMenubutton);

    document.querySelector(".logo_1").addEventListener("click", () => {
        window.location.href = "index.html";
        console.log("1234");
    })
}

function trykPaaMenubutton() {
    console.log("tryk på menubutton");
    $("nav").toggleClass("hidden");
    //skift knappen frem og tilbage mellem kryds
    $(".menubutton").toggleClass("kryds");
}




//// When the user scrolls the page, execute myFunction
//window.onscroll = function () {
//    myFunction()
//};
//
//// Get the navbar
//var navbar = document.getElementById("navbar");
//
//// Get the offset position of the navbar
//var sticky = navbar.offsetTop;
//
//// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//function myFunction() {
//    if (window.pageYOffset >= sticky) {
//        navbar.classList.add("sticky")
//    } else {
//        navbar.classList.remove("sticky");
//    }
//}
