import { barCharge } from './BarCharge.js'


const confirmed =  (pobalcionTotal, numConfirmados, numMuertos, numRecuperados, fechaActualizacion) => {

    let porcentageConfirmados = ((numConfirmados * 100) / pobalcionTotal).toFixed(2)
    return `\
    <article> \
        <h3 style="font-size: 14px; color: #454545;"> <i class="fas fa-procedures"></i> Casos confirmados de Covid</h3> \
        <p style="font-size: 12px; color: gray;"> <b>${ Intl.NumberFormat("es-MX").format(numConfirmados) }</b> / ${Intl.NumberFormat("es-MX").format(pobalcionTotal)}</p> \
        ${barCharge(porcentageConfirmados)}
        <p style="text-align: center;"> ${porcentageConfirmados} % </p> \
        // Agregar Fecha de los datos
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
    <article"> \
        <h3 style="font-size: 14px; color: #454545;"> <i class="fas fa-tombstone-alt"></i> Muertos por Covid</h3> \
        <p style="font-size: 12px; color: gray;"> <b>${ Intl.NumberFormat("es-MX").format(numMuertos) }</b> / ${Intl.NumberFormat("es-MX").format(pobalcionTotal)}</p> \
        ${barCharge(porcentageMuertes)}
        <p style="text-align: center;"> ${porcentageMuertes} % </p> \
    </article> \
    `
}

export { confirmed, recovered, deaths }
