let datosModule =  (pobalcionTotal, numConfirmados, numMuertos, numRecuperados, fechaActualizacion) => {

    console.log("NumConf: ",numConfirmados," - PoblTotal: ",pobalcionTotal)

    let porcentageConfirmados = ((numConfirmados * 100) / pobalcionTotal).toFixed(2)

    console.log("Porc: ",porcentageConfirmados)
    return `\
    \
    <article> \
        <h3 style="font-size: 14px;">Numero de casos confirmados</h3> \
        <p>${ Intl.NumberFormat("es-MX").format(numConfirmados) }</p> \
        <div class="progress" style="background-color: #bdbdbd;"> \
            <div class="progress-bar" role="progressbar" style="width: ${porcentageConfirmados}%; background-color: blue;" aria-valuenow="${porcentageConfirmados}" aria-valuemin="0" aria-valuemax="100"></div> \
        </div> \
        <p style="text-align: center;"> ${porcentageConfirmados} % </p> \
    </article> \
    `

}

export { datosModule }