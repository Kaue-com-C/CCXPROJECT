const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");


const evento = "1 dec 2023";

function countDown(){
    const dataEvento = new Date(evento);
    const hoje = new Date();

    const segTotal = (dataEvento - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMiutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;


    dia.innerHTML = finalDias +" D";
    hora.innerHTML = formatoTempo(finalHoras)+" H";
    minuto.innerHTML = formatoTempo(finalMiutos)+" M";
    segundo.innerHTML = formatoTempo(finalSegundos) +" S";
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);