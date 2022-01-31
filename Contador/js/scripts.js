let numero = parseInt(document.querySelector("#numero").textContent);

const incremento = document.querySelector("#incremento");
const decremento = document.querySelector("#decremento");
const reincicio = document.querySelector("#reinicio");

incremento.addEventListener("click",()=>{
    numero++;
    document.querySelector("#numero").textContent = numero;
})
decremento.addEventListener("click",()=>{
    numero--;
    document.querySelector("#numero").textContent = numero;
})

reincicio.addEventListener("click", ()=>{
    numero = 0;
    document.querySelector("#numero").textContent = numero;
})
