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





