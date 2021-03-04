
const getPoblacionTotalDeMexico = async () => {

    let data = undefined
    let dominio = "http://www3.inegi.org.mx/sistemas/api/indicadores/v1/"
    let indicadorParaPoblacionTotal = "Indicador/1002000001/"
    let areaGeografica = "00/"
    let idioma = "es/"
    let datosRecientes = "true/"
    let formato = "json/"
    let token = "ba2f3d27-c084-06b3-7503-a6378384b28d"

    let endpoint = dominio + indicadorParaPoblacionTotal + areaGeografica + idioma + datosRecientes + formato + token
    
    try {
        const resp = await fetch(endpoint)

        if(resp.ok) {
            console.log("Todo ok: ", resp)

            if(resp.status === 202) {
                throw new Error("La peticion fue aceptada, pero no hubo respuesta del servidor")
            }

            data = await resp.json()

            if(data["ErrorInfo"]) console.log(data["ErrorInfo"])
        } else {
            console.log("Todo NO ok")
            throw await resp.json()
        }

    } catch (error) {
        console.error("Ha ocurrido un erro al conectar con la API de INEGI: ",error)
        return undefined
    }

    console.log(data)
    return data
}

export { getPoblacionTotalDeMexico }
