
const confirmed =  (pobalcionTotal, numConfirmados, numMuertos, numRecuperados, fechaActualizacion) => {

    let porcentageConfirmados = ((numConfirmados * 100) / pobalcionTotal).toFixed(2)
    return `\
    <article> \
        <h3 style="font-size: 14px; color: #454545;"> <i class="fas fa-procedures"></i> Casos confirmados de Covid</h3> \
        <p style="font-size: 12px; color: gray;"> <b>${ Intl.NumberFormat("es-MX").format(numConfirmados) }</b> / ${Intl.NumberFormat("es-MX").format(pobalcionTotal)}</p> \
        ${barCharge(porcentageConfirmados)}
        <p style="text-align: center;"> ${porcentageConfirmados} % </p> \
    </article>`
}

const recovered =  (pobalcionTotal, numConfirmados, numMuertos, numRecuperados, fechaActualizacion) => {

    let porcentageRecuperados = ((numRecuperados * 100) / pobalcionTotal).toFixed(2)
    return `\
    \
    <article> \
        <h3 style="font-size: 14px; color: #454545;"> <i class="fas fa-medkit"></i> Casos recuperados de Covid</h3> \
        <p style="font-size: 12px; color: gray;"> <b>${ Intl.NumberFormat("es-MX").format(numRecuperados) }</b> / ${Intl.NumberFormat("es-MX").format(pobalcionTotal)}</p> \
        ${barCharge(porcentageRecuperados)}
        <p style="text-align: center;"> ${porcentageRecuperados} % </p> \
    </article> \
    `
}

const deaths =  (pobalcionTotal, numConfirmados, numMuertos, numRecuperados, fechaActualizacion) => {

    let porcentageMuertes = ((numMuertos * 100) / pobalcionTotal).toFixed(2)
    return `\
    \
    <article"> \
        <h3 style="font-size: 14px; color: #454545;"> <i class="fas fa-tombstone-alt"></i> Muertos por Covid</h3> \
        <p style="font-size: 12px; color: gray;"> <b>${ Intl.NumberFormat("es-MX").format(numMuertos) }</b> / ${Intl.NumberFormat("es-MX").format(pobalcionTotal)}</p> \
        ${barCharge(porcentageMuertes)}
        <p style="text-align: center;"> ${porcentageMuertes} % </p> \
    </article> \
    `
}

const separator = () => {
    return `\
    <p style="border: 0.5px solid #e0e0e0; width: 100%; margin-top:0.8em; margin-bottom: 1.8em;">  </p>
    `
}

const barCharge = (porct) => {
    const id = Math.random()
    const bar = 
    `<div class="bar"> \
        <span class="bar__loaded" id="${id}"></span>\
    </div>`

    setTimeout( () => {

        const bar_loaded = document.getElementById(id)
        let i =  10000
        let current_porct = 100

        while(i > porct*100) {
            setTimeout( () => {
                bar_loaded.style.width = current_porct + "%"
                current_porct -= 0.01
            }, 0.3*i);
            i--
        }
    }, 200)

    return bar
}

export { confirmed, recovered, deaths, separator, barCharge }