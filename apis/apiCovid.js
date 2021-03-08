/* 
    Aqui estan todos los endpoint utilizados para obtener los datos estadisticos de esta aplicacion.
    La fuente de los datos es: https://documenter.getpostman.com/view/10808728/SzS8rjbc
    Esta es una aplicacion sin fines de lucro, con la unica intension de difudir informacion confiable.
*/

const getSumary = async () => {

    // EndPoint:        https://api.covid19api.com/summary
    // Description:     A summary of new and total cases per country updated daily.
    // Headers:         X-Access-Token 5cf9dfd5-3449-485e-b5ae-70a60e997864
    let data = undefined
    
    try {
        const res = await fetch('https://api.covid19api.com/summary')
        
        if (res.ok) {
            data = await res.json()
        } else {
            throw new Error(res.status)
        }

    } catch (err) {
        console.error("Erron in function getSumary: ", err)
    }
    
    return data
}


const getBySlugLastRecord = async (slugContry) => {
    if (!slugContry) return undefined
    
    let data = undefined
    let endpoint = `https://api.covid19api.com/dayone/country/${slugContry}`

    try {
        const res = await fetch(endpoint, {
            'mode': 'cors'
        })

        if (res.ok) {
            data = await res.json()
            data = data[data.length-1]

        } else {
            console.error("Error en fetch con API COVID - statusText:: ", res.statusText, " -- Codigo de status: ", res.status)
            throw await res.json()
        }

    } catch (err) {

        if(err.message) {

            if(err.message == "for performance reasons, please specify a province") {
                return { messageError:'Por razones de desempeño, los servidores necesitan que se especifique un estado del país introducido. <br><br> <strong style="color: #949494;">Por el momento la aplicacion no tiene soporte para dicha accion, pero muy pronto lo tendra, gracias por su comprensión</strong>' }

            } else if(err.message == "Not Found") {
                return { messageError: `No hay coincidencias con los datos de busqueda.<br><strong style="color: gray;">Por favor reintentalo</strong>` }

            } else {
                console.log("This:: ",err)
                return { messageError: `Hubo un error de conexion. <br><br> <b>Por favor vuelve a intentarlo mas tarde.<b>` }
            }

        } else {
            return { message: "Houston,Tenemos un pequeño problema. Por favor contacta a traves de los datos que estan en la seccion de 'Info.' al desarrollador y decribele lo ocurrido <br> <b>Gracias por tu comprensión.</b>" }
        }
    }

    return data
}


const getBySlugAndProvince = (slugCountry, province) => {
    if(!slugCountry || !province) return undefined
    
    return undefined
}



export { getSumary, getBySlugLastRecord, getBySlugAndProvince }