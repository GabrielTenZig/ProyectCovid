import { getLastestDataCovidFromCountry, getPopulationOf } from './localData/accesToData.js'
import { confirmed, recovered, deaths, separator } from './components/components.js'


// ### Selectores de botones del menu ###
const butonMexico = document.getElementById('check-mexico')
const butonPais = document.getElementById('check-pais')
const butonGlobal = document.getElementById('check-global')
const butonAbout = document.getElementById('check-about')

// ### Selectores de los dashboards ###
const dashboardMexico = document.getElementById('dash-mexico')
const dashboardPais = document.getElementById('dash-pais')
const dashboardGlobal = document.getElementById('dash-global')
const dashboardAbout = document.getElementById('dash-about')


dashboardPais.style.zIndex = '1'
dashboardGlobal.style.zIndex = '4'
dashboardAbout.style.zIndex = '2'
dashboardMexico.style.zIndex = '3'

dashboardMexico.style.left = '-100%'
dashboardPais.style.left = '-100%'
dashboardGlobal.style.left = '0%'
dashboardAbout.style.left = '100%'


// ### Eventos al presionar los botones del menu ###
butonMexico.addEventListener('click', () => {

    dashboardMexico.style.zIndex = '4'
    dashboardPais.style.zIndex = '1'
    dashboardGlobal.style.zIndex = '2'
    dashboardAbout.style.zIndex = '3'

    console.log("Listooo786oo")
    dashboardMexico.style.left = '0%'
    dashboardPais.style.left = '100%'
    dashboardGlobal.style.left = '100%'
    dashboardAbout.style.left = '100%'
})

butonPais.addEventListener('click', () => {
    dashboardMexico.style.left = '-100%'
    dashboardPais.style.left = '0%'
    dashboardGlobal.style.left = '100%'
    dashboardAbout.style.left = '100%'
})

butonGlobal.addEventListener('click', () => {
    dashboardMexico.style.left = '-100%'
    dashboardPais.style.left = '-100%'
    dashboardGlobal.style.left = '0%'
    dashboardAbout.style.left = '100%'
})

butonAbout.addEventListener('click', () => {
    dashboardMexico.style.left = '-100%'
    dashboardPais.style.left = '-100%'
    dashboardGlobal.style.left = '-100%'
    dashboardAbout.style.left = '0%'
})



// #### Elementos dentro del Dashboard Pais ###
const searchBoxPais = document.getElementById('v_pais-selected')
const dashboardCountryInformation = document.getElementById('dashboard-pais__informacion')
const titleNombreDelPais = document.getElementById('v_nombre-pais')
let loaderDashboardPais = document.getElementById('loader')
// const loeaderHTML = document.getElementById('loader').outerHTML

loaderDashboardPais.style.display = 'none'

// BUSCANDO PAIS...
searchBoxPais.addEventListener('keydown', async (e) => {
    if (e.key != "Enter") return

    titleNombreDelPais.textContent = "Nombre del país"
    dashboardCountryInformation.innerHTML = loaderDashboardPais.outerHTML
    loaderDashboardPais = document.getElementById('loader')
    loaderDashboardPais.style.display = 'block'

    // Recivimos una respuest y limpiamos la interfaz
    const nameCountryInputedByUser = searchBoxPais.value
    const data = await getLastestDataCovidFromCountry( nameCountryInputedByUser )
    searchBoxPais.value = ''
    loaderDashboardPais.style.display = 'none'

    
    console.log("Llegó:: ", data)
    
    // Verificamos si ocurrió un error
    if(data.messageError) {
        dashboardCountryInformation.innerHTML = `<p>${data.messageError}<p>`

    // Verificamos si nos llego un array de coincidencias
    } else if(data.length) {
        dashboardCountryInformation.innerHTML = `<p>Obtuvimos estas coincidencias:<p>`
        console.log("ashdgfpbsaidug")
        let coincidencesToAdd = ""

        coincidencesToAdd += `<p style="color: gray">`
        for(let coincidence of data) {
            coincidencesToAdd += `- ${coincidence.name} <br>`
        }
        coincidencesToAdd += `</p>`
        dashboardCountryInformation.innerHTML += coincidencesToAdd

    // Si no, pues nos llego la data del pais buscado
    } else {
        // const lastDataCovidFromContry = data[data.length-1]
        console.log("Data:: ", data)
        titleNombreDelPais.textContent = `${data.Country}`
        dashboardCountryInformation.innerHTML = `<p style="font-size:11px">Poblacion aproximada de ${data.Country} durante la pandemia: <b style="font-size: 12px">${Intl.NumberFormat("es-MX").format(getPopulationOf(nameCountryInputedByUser))}</b></p>`
        dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += confirmed(getPopulationOf(nameCountryInputedByUser),data["Confirmed"],data["Deaths"],data["Recovered"],data["Date"])
        dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += recovered(getPopulationOf(nameCountryInputedByUser), data["Confirmed"],data["Deaths"],data["Recovered"],data["Date"])
        dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += deaths(getPopulationOf(nameCountryInputedByUser), data["Confirmed"],data["Deaths"],data["Recovered"],data["Date"])
    }


    // if(data.messageError) {
    //     dashboardCountryInformation.innerHTML = `<p">${data.messageError}<p>`

    // } else if(data.nameCountry && data.records) {
    //     titleNombreDelPais.textContent = data.nameCountry

    //     let datosCountry = await data.records[data.records.length-1]
    //     loaderDashboardPais.style.display = 'none'

    //     // dashboardCountryInformation.innerHTML = `<p>Casos Confirmados: ${ new Intl.NumberFormat("es-MX").format(datosCountry["Confirmed"]) } </p>`
    //     dashboardCountryInformation.innerHTML = datosModule(await getPoblacionTotalDeMexico() || 130273923,datosCountry["Confirmed"],datosCountry["Deaths"],datosCountry["Recovered"],datosCountry["Date"])
        
    //     // dashboardCountryInformation.innerHTML += `<p>Numero de muertes: ${ new Intl.NumberFormat("es-MX").format(datosCountry["Deaths"]) }</p>`
    //     // dashboardCountryInformation.innerHTML += `<p>Casos recuperados: ${ new Intl.NumberFormat("es-MX").format(datosCountry["Recovered"]) }</p>`
    //     // dashboardCountryInformation.innerHTML += `<p>Actualizado al ${ datosCountry["Date"] }</p>`
        
    // } 


})

document.addEventListener( 'DOMContentLoaded', async () => {

    console.log("DOM cargado completamnete")
    console.log(  )

} )

