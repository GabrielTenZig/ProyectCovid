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


const getCountryData = async (nombrePais,state) => {
    if (!nombrePais) return undefined
    nombrePais = nombrePais.toLowerCase()
    let data = undefined
    let slugOfPais = undefined
    let nameCountry = undefined

    // Nos llega un nombre generico, obtenermos los paises y buscamos las coincidencias en la Data
    let endpoint = `https://api.covid19api.com/countries`

    try {
        const res = await fetch(endpoint)

        if(res.ok) {
            let contries = await res.json()
            console.log("Countries Data::", contries)

            for(let country of contries) {
                nameCountry = country.Country
                
                if(nameCountry.toLowerCase().includes(nombrePais)) {
                    console.group("Encontrado")
                    console.log("Country: ",country.Country)
                    console.log("Slug: ",country.Slug)
                    console.groupEnd()

                    slugOfPais = country.Slug
                    console.log("Enontrado:::> ",slugOfPais)

                    break
                }
            }

        } else {
            throw new Error(res.status)
        }

    } catch (err) {
        console.error("Error al recuperar la data Countries: ", err)
    }

    // Agregamos el nombre Slug del pasi para usarlo en la URL y obtenerlo de la Api
    console.log("Enos aqui")
    endpoint = (state)?`https://api.covid19api.com/dayone/country/${slugOfPais}?province=${state}`:`https://api.covid19api.com/dayone/country/${slugOfPais}`
    console.log("Se eligio endpoint:: ",endpoint)

    try {
        const res = await fetch(endpoint)
    
        if (res.ok) {
            console.log('Todo aki   ')
            data = await res.json()
        } else {
            throw await res.json()
        }

    } catch (err) {
        if(err.message) {
            
            if(err.message == "for performance reasons, please specify a province") {
                return { messageError:'Por razones de desempeño del sistema.<br> <strong style="color: #949494;">Por favor especifica un estado del pais introducido</strong>' }
            
            } else if(err.message == "Not Found") {
                return { messageError: `No hay coincidencias con los datos de busqueda.<br><strong style="color: gray;">Por favor reintentalo</strong>` }
            }

        } else {
            return { message: "Houston,Tenemos un pequeño problema. Por favor contacta a traves de los datos que estan en la seccion de 'Acerca de la App' al desarrollador" }
        }
    }
    
    data = { records: data, nameCountry: nameCountry }
    console.log("Retornando: ", data)
    console.log("Nombre: ", nameCountry)

    return data
}

/*
const translate = async (text) => {

    if (!text) return undefined
    let data = undefined

    const endpoint = 'https://translation.googleapis.com/language/translate/v2'

    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer gcloud auth application-default print-access-token"
            },
            ContentType: "application/json; charset=utf-8",
            body: {
                "q": text,
                "source": "en",
                "target": "es",
                "format": "text"
              }
        })

        if (res.ok) {
            data = await res.json()
        } else {
            throw new Error(res.status)
        }

    } catch (err) {
        console.error("Error in function translate: ", err)
    }

    return data
}
*/


export { getSumary, getCountryData }