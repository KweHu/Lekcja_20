const url = ["rybka.png", "kotek.png", "owieczka.png", "foczka.png", "motylek.png"];
const alt = ["Rybka", "Kotek", "Owieczka", "Foczka", "Motylek"];

window.onload = function(){
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    img1.src = "images/" + url[0];
    img1.alt = alt[0];
    img1.title = alt[0];
    img2.src = "images/" + url[4];
    img2.alt = alt[4];
    img2.title = alt[4];
}

let imgTmpID = 4;
function zmianaZdjecia(num){
    img1.src = "images/" + url[imgTmpID];
    img1.alt = alt[imgTmpID];
    img1.title = alt[imgTmpID];
    img2.src = "images/" + url[num-1];
    img2.alt = alt[num-1];
    img2.title = alt[num-1];
    imgTmpID = num-1;
}