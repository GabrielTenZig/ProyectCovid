import { getBySlugLastRecord } from '../apis/apiCovid.js'
import { contries, months } from './data.js'

export const getLastestDataCovidFromCountry = async (nameContry) => {
    if(!nameContry) return undefined
    console.log("Antes era::::: ", nameContry)
    nameContry = nameContry.toLowerCase()
    console.log("Ahora es::::: ", nameContry)

    let coincidences = []

    // Buscamos concidencias del nombreContry vesus los nombres de paises
    console.log("Verificando: ", nameContry)
    for(let contry of contries) {
        if (contry.name.includes(nameContry)) {
            console.log("Coincidio con: ", contry.name)
            coincidences.push(contry)
        } else {
            console.log("No coincidio con: ", contry.name)
        }
    }

    if(coincidences.length == 0) {
        // console.log("NO hay coincidencias")
        return {
            messageError: `No hay coincidencias con los datos de busqueda.<br><b style=";">Por favor, introduce un nombre de país valido y reintentalo.</b>`
        }

    } else if(coincidences.length == 1) {   
        let data = await getBySlugLastRecord(coincidences[0].slug)
        return data

    } else {
        return coincidences
    }
}

export const getPopulationOf = (nameCountry) => {
    // console.log("Reciviendo name:: ", nameCountry)
    nameCountry = nameCountry.toLowerCase()

    for(let country of contries) {
        if(country.name === nameCountry) {
            // console.log("Devolviendo population:: ", country.population)
            return country.population
        }
    }

}