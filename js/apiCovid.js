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

const getCountryData = async (nombrePais) => {
    console.log('Llego', nombrePais)
    if (!nombrePais) return undefined
    console.log('Paso')

    let data = undefined

    let endpoint = `https://api.covid19api.com/total/country/${nombrePais}`

    try {
        const res = await fetch(endpoint)
    
        if (res.ok) {
            console.log('Todo aki   ')
            data = await res.json()
        } else {
            throw new Error(res.status)
        }

    } catch (err) {
        console.error("Error in finction getCountryData: ",err)
    }
    
    return data
}

// const translate = async (text) => {

//     if (!text) return undefined
//     let data = undefined

//     const endpoint = 'https://translation.googleapis.com/language/translate/v2'

//     try {
//         const res = await fetch(endpoint, {
//             method: 'POST',
//             headers: {
//                 "Authorization": "Bearer gcloud auth application-default print-access-token"
//             },
//             ContentType: "application/json; charset=utf-8",
//             body: {
//                 "q": text,
//                 "source": "en",
//                 "target": "es",
//                 "format": "text"
//               }
//         })

//         if (res.ok) {
//             data = await res.json()
//         } else {
//             throw new Error(res.status)
//         }

//     } catch (err) {
//         console.error("Error in function translate: ", err)
//     }

//     return data
// }



export { getSumary, getCountryData }