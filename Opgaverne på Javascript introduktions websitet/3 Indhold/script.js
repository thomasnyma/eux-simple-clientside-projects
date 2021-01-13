'use strict'
window.addEventListener('load', () => {
    InfoKasser();
});

function InfoKasser() {
    for(let i = 0;i<document.getElementsByClassName('poster-item').length;i++) {
        document.getElementsByClassName('poster-item')[i].onclick = InfoKasseSkift;
    }
}

function InfoKasseSkift() {
    if(this.getElementsByTagName('div')[0].style.display != "block") {
        this.getElementsByTagName('div')[0].style.display = "block";
    } else {
        this.getElementsByTagName('div')[0].style.display = "none";
    }
}