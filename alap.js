function rendel(){
    ertek=parseInt(document.getElementById("kaja").value)
    if (hazhoz.checked) alert(`${ertek+500} értékben rendeltél házhoz`)
    else alert(`${ertek} értékben rendeltél`)
}