import { getBySlugAndProvince, getBySlugLastRecord } from '../apis/apiCovid.js'
import { contries } from './Contries.js'
import { isEmpty } from './../tenzigLibrary/arrays.js'

const getDataOfCountry = async (nameContry) => {
    if(!nameContry) return undefined
    // nameContry = nameContry.toLowerCase()
    // if ( !contries.filter( pais => pais.name === nameContry ) ) ()

    const paisesQueCoinciden = contries.filter(pais => pais.name === nameContry)
    
    return (isEmpty(paisesQueCoinciden))?
        ({messageError: `No hay coincidencias con los datos de busqueda.<br><b style=";">Por favor, introduce un nombre de país valido y reintentalo.</b>`})
        : getBySlugLastRecord( paisesQueCoinciden[0].slug )

    // let coincidences = []

    // Buscamos concidencias del nombreContry vesus los nombres de paises
    // for(let contry of contries) {
    //     if (contry.name.includes(nameContry)) {
    //         coincidences.push(contry)
    //     }
    // }



    if(coincidences.length == 0) {
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

const getPopulationOf = (nameCountry) => {
    if (!nameCountry) return undefined
    const paisesQueCoinciden = contries.filter( pais => pais.name === nameCountry )

    return (isEmpty(paisesQueCoinciden))? undefined : paisesQueCoinciden[0].population
}

export { getDataOfCountry, getPopulationOf }