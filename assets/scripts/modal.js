let lupa = document.querySelectorAll(".overlay");
let overlay = document.querySelector(".modal-tecnologia-overlay");
let overlayImage = document.querySelector(".modal-tecnologia");

lupa.forEach( item => {
    item.addEventListener('click', () => {
        overlay.style.display = "flex";
        overlayImage.innerHTML = `<img src="assets/img/projetos/${item.getAttribute("data")}.png" alt="${item.getAttribute("data")}">`;
    });
});

overlay.addEventListener('click', event => {
    if (!overlayImage.contains(event.target)){
        overlay.style.display = "none";
    }
})
