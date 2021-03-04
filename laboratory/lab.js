"use strict"
alert("Iniciando Script")

const obtenerNombresDeMeses = () => {

    alert("ENTRO")

    fetch('localhost:5500/js/data/months.json')
    .then( resp => resp.json())
    .then(data => {
        alert(data)
    })
    alert("SALIO")
    // alert("Inicio")
    // let resp = await fetch('./data/months.json')
    // alert("La resp: " + resp)
    // let data = await resp.json()
    // alert("Fin")
    // alert("Data en consola: " + data)
}


// const obteniendo = async () => {

    obtenerNombresDeMeses()
// }

// obteniendo()
// alert("Terminando Fetch")


// import { months } from './data/months.json' 

alert("Todo cool")

let buton_restarEstosDiasFecha = document.getElementById("buton_restar_estos_dias_a_fecha")
let input_numeroDiasParaRestar = document.getElementById("v_numero_dias_para_restar")
let buton_verificar = document.getElementById("buton_verificar")
let dateEspecificada = document.getElementById("v_fecha")

buton_verificar.addEventListener( 'click', e => {

    if (!dateEspecificada.value) {
        alert("No se ha seleccionado una fecha")
        return
    }

    alert("Seleccionaron esta fecha: " + dateEspecificada.value)
})

buton_restarEstosDiasFecha.addEventListener( 'click', e => {
    
    if(!dateEspecificada.value) {
        alert("Por favor, selecciona una fecha")
        return
    }

    if(!input_numeroDiasParaRestar.value) {
        alert("Por favor, inntroduce un numero para restar")
        return
    }

    // let fecha = Date.parse(dateEspecificada.value)
    // let myOtherDate = new Date(dateEspecificada.valueAsDate)
    // alert("This is select(): " + dateEspecificada.select())

    // alert("Funciona? " + myOtherDate)
    let my_fecha = dateEspecificada.value
    let pedazos = my_fecha.split("-")

    console.log("Pedacitos: ",pedazos)

    let fecha = new Date(pedazos[0], pedazos[1]-1, pedazos[2])
    alert("Fecha creada con new Date: " + fecha)
    // alert("Fecha en Normal: " + fecha)

    alert("Tengo esto: " + months)

    alert("Fecha por partes: " + fecha.getDate() + " de " + months[""+fecha.getMonth()] + " del " + fecha.getFullYear())
})




