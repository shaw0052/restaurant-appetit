//------------- Burger Menu ------------------------

// når brugeren trykker på menubotton:
// skift/toggle klassen "hidden" på nav

$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPaaMenubutton);
}

function trykPaaMenubutton() {
    console.log("tryk på menubutton");
    $("nav").toggleClass("hidden");
    //skift knappen frem og tilbage mellem kryds
    $(".menubutton").toggleClass("kryds");
}





//---------- Json, Modal, Filtrering ---------------------

let retter = [];
let kategoriFilter = "alle";


document.addEventListener("DOMContentLoaded", start);

function start() {
    hentJson();
    forberedFiltrering();
}
//Filtrering af retter
function forberedFiltrering() {
    document.querySelectorAll(".filtrering button").forEach(knap => {
        knap.addEventListener("click", () => {


            kategoriFilter = knap.getAttribute("data-menu");
            visRetter();
        });
    });

}

async function hentJson() {
    let jsonData = await fetch("menu.json");
    retter = await jsonData.json();
    visRetter();
}


//Vis retter, billeder og tekst
function visRetter() {
    // globale variabeler
    let display = document.querySelector(".ret-display");
    let temp = document.querySelector(".ret-template");

    display.textContent = "";

    retter.forEach(ret => {

        if (ret.kategori == kategoriFilter || kategoriFilter == "alle") {
            console.log(ret.kategori, kategoriFilter);

            //lav en klon af template
            let klon = temp.cloneNode(true).content;

            //indsæt data i html
            klon.querySelector("h2").textContent = ret.navn;
            klon.querySelector(".ret-billede").src = "assets/imgs/small/" + ret.billede + "-small.jpg";
            ret.billede.jpg;

            klon.querySelector(".ret-billede").addEventListener("click", () => {
                visModal(ret);
            });

            klon.querySelector(".ret-billede").alt = "billede af" + ret.navn;
//            klon.querySelector(".ret-beskrivelse").textContent = ret.beskrivelse;
            klon.querySelector(".ret-pris").textContent = "pris " + ret.pris + ",-";

            //placer klon i html
            display.appendChild(klon);
        }
    });
}

//Vis modal vindue
function visModal(retten) {
    let modal = document.querySelector("#modal");

    modal.classList.add("vis");
    modal.querySelector(".modal-navn").textContent = retten.navn;
    modal.querySelector(".modal-billede").src = "assets/imgs/large/" + retten.billede + ".jpg";
    modal.querySelector(".modal-billede").alt = "Foto af" + retten.navn;

    modal.querySelector(".modal-beskrivelse").textContent = retten.beskrivelse;


    modal.querySelector("button").addEventListener("click", () => {
        modal.classList.remove("vis");
    });
}
