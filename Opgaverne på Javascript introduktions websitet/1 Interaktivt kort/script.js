window.addEventListener('load', () => {
    document.getElementById('DivKassePunkt1').onmouseover = Punkt1Over;
    document.getElementById('DivKassePunkt1').onmouseleave = Punkt1Ud;
    document.getElementById('DivKassePunkt2').onmouseover = Punkt2Over;
    document.getElementById('DivKassePunkt2').onmouseleave = Punkt2Ud;
})

Punkt1Over = () => {
    document.getElementById('PTag1').style.display = 'block';
}

Punkt1Ud = () => {
    document.getElementById('PTag1').style.display = 'none';
}

Punkt2Over = () => {
    document.getElementById('PTag2').style.display = 'block';
}

Punkt2Ud = () => {
    document.getElementById('PTag2').style.display = 'none';
}