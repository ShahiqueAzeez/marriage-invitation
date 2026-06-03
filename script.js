function createPetal() {

    const petal = document.createElement("img");

    petal.src = "petal.png";

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.width =
        (20 + Math.random() * 30) + "px";

    petal.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    petal.style.opacity =
        0.5 + Math.random() * 0.5;

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 15000);
}

setInterval(createPetal, 400);