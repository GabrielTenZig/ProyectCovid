
const confirmed =  (pobalcionTotal, numConfirmados, numMuertos, numRecuperados, fechaActualizacion) => {

    console.log("NumConf: ",numConfirmados," - PoblTotal: ",pobalcionTotal)

    let porcentageConfirmados = ((numConfirmados * 100) / pobalcionTotal).toFixed(2)

    console.log("Porc: ",porcentageConfirmados)
    return `\
    \
    <article> \
        <h3 style="font-size: 14px; color: #454545;"> <i class="fas fa-procedures"></i> Casos confirmados de Covid</h3> \
        <p style="font-size: 12px; color: gray;"> <b>${ Intl.NumberFormat("es-MX").format(numConfirmados) }</b> / ${Intl.NumberFormat("es-MX").format(pobalcionTotal)}</p> \
        <div class="progress" style="background-color: #bdbdbd;"> \
            <div class="progress-bar" role="progressbar" style="width: ${porcentageConfirmados}%;" aria-valuenow="${porcentageConfirmados}" aria-valuemin="0" aria-valuemax="100"></div> \
        </div> \
        <p style="text-align: center;"> ${porcentageConfirmados} % </p> \
    </article> \
    `
}

const recovered =  (pobalcionTotal, numConfirmados, numMuertos, numRecuperados, fechaActualizacion) => {

    console.log("NumRecuperados: ",numRecuperados," - PoblTotal: ",pobalcionTotal)

    let porcentageRecuperados = ((numRecuperados * 100) / pobalcionTotal).toFixed(2)

    console.log("Porc: ",porcentageRecuperados)
    return `\
    \
    <article> \
        <h3 style="font-size: 14px; color: #454545;"> <i class="fas fa-medkit"></i> Casos recuperados de Covid</h3> \
        <p style="font-size: 12px; color: gray;"> <b>${ Intl.NumberFormat("es-MX").format(numRecuperados) }</b> / ${Intl.NumberFormat("es-MX").format(pobalcionTotal)}</p> \
        <div class="progress" style="background-color: #bdbdbd;"> \
            <div class="progress-bar" role="progressbar" style="width: ${porcentageRecuperados}%;" aria-valuenow="${porcentageRecuperados}" aria-valuemin="0" aria-valuemax="100"></div> \
        </div> \
        <p style="text-align: center;"> ${porcentageRecuperados} % </p> \
    </article> \
    `
}

const deaths =  (pobalcionTotal, numConfirmados, numMuertos, numRecuperados, fechaActualizacion) => {

    console.log("NumMuertes: ",numMuertos," - PoblTotal: ",pobalcionTotal)

    let porcentageMuertes = ((numMuertos * 100) / pobalcionTotal).toFixed(2)

    console.log("Porc: ",porcentageMuertes)
    return `\
    \
    <article> \
        <h3 style="font-size: 14px; color: #454545;"> <i class="fas fa-tombstone-alt"></i> Muertos por Covid</h3> \
        <p style="font-size: 12px; color: gray;"> <b>${ Intl.NumberFormat("es-MX").format(numMuertos) }</b> / ${Intl.NumberFormat("es-MX").format(pobalcionTotal)}</p> \
        <div class="progress" style="background-color: #bdbdbd;"> \
            <div class="progress-bar" role="progressbar" style="width: ${porcentageMuertes}%;" aria-valuenow="${porcentageMuertes}" aria-valuemin="0" aria-valuemax="100"></div> \
        </div> \
        <p style="text-align: center;"> ${porcentageMuertes} % </p> \
    </article> \
    `
}

const separator = () => {
    return `\
    <span style="border: 0.5px solid #e0e0e0; width: 100%; margin-top:0.8em; margin-bottom: 1.8em;">  </span>
    `
}

export { confirmed, recovered, deaths, separator }