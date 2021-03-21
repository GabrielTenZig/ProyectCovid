import { getBySlugLastRecord } from '../apis/apiCovid.js'
import { contries } from './data.js'

export const getDataOfCountry = async (nameContry) => {
    if(!nameContry) return undefined
    nameContry = nameContry.toLowerCase()

    let coincidences = []

    // Buscamos concidencias del nombreContry vesus los nombres de paises
    for(let contry of contries) {
        if (contry.name.includes(nameContry)) {
            coincidences.push(contry)
        }
    }

    if(coincidences.length == 0) {
        // console.log("NO hay coincidencias")
        return {
            messageError: `No hay coincidencias con los datos de busqueda.<br><b style=";">Por favor, introduce un nombre de país valido y reintentalo.</b>`
        }

    } else if(coincidences.length == 1) {   
        const data = {
            ...coincidences[0],
            ...await getBySlugLastRecord(coincidences[0].slug)
        }
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
            console.log("Devolviendo population:: ", country.population)
            return country.population
        }
    }

}