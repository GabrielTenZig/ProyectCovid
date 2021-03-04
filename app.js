import { getCountryData, getSumary } from './js/apiCovid.js'
import { getPoblacionTotalDeMexico } from './js/apiINEGI.js'
import { datosModule } from './js/components/DatosModule.js'


// ### Selectores de botones del menu ###
const butonMexico = document.getElementById('check-mexico')
const butonPais = document.getElementById('check-pais')
const butonGlobal = document.getElementById('check-global')
const butonAbout = document.getElementById('check-about')

// ### Selectores de los dashboards ###
const dashboardPais = document.getElementById('dash-pais')
const dashboardGlobal = document.getElementById('dash-global')
const dashboardAbout = document.getElementById('dash-about')


// ### Eventos al presionar los botones del menu ###
butonPais.addEventListener('click', () => {
    console.log('Buton Pais')
    dashboardAbout.style.right = '-100%'
    dashboardPais.style.left = 0
})

butonGlobal.addEventListener('click', () => {
    console.log('Buton Global')
    dashboardPais.style.left = '-100%'
    dashboardAbout.style.right = '-100%'
})

butonAbout.addEventListener('click', () => {
    console.log('Buton About')
    dashboardPais.style.left = '-100%'
    dashboardAbout.style.right = 0
})


// #### Elementos dentro del Dashboard Pais ###
const searchBoxPais = document.getElementById('v_pais-selected')
const dashboardCountryInformation = document.getElementById('dashboard-pais__informacion')
let loaderDashboardPais = document.getElementById('loader')
const titleNombreDelPais = document.getElementById('v_nombre-pais')
// const loeaderHTML = document.getElementById('loader').outerHTML

loaderDashboardPais.style.display = 'none'

// Al finalizar el type en "Introduzca el pais"
searchBoxPais.addEventListener('keydown', async (e) => {
    if (e.key != "Enter") return

    titleNombreDelPais.textContent = "Nombre del Pais"

    dashboardCountryInformation.innerHTML = loaderDashboardPais.outerHTML
    loaderDashboardPais = document.getElementById('loader')
    loaderDashboardPais.style.display = 'block'

    const data = await getCountryData( searchBoxPais.value )
    searchBoxPais.textContent = ''
    
    console.log("Llegó:: ", data)

    if(data.messageError) {
        dashboardCountryInformation.innerHTML = `<p>${data.messageError}<p>`

    } else if(data.nameCountry && data.records) {
        titleNombreDelPais.textContent = data.nameCountry

        let datosCountry = await data.records[data.records.length-1]
        loaderDashboardPais.style.display = 'none'

        // dashboardCountryInformation.innerHTML = `<p>Casos Confirmados: ${ new Intl.NumberFormat("es-MX").format(datosCountry["Confirmed"]) } </p>`
        dashboardCountryInformation.innerHTML = datosModule(await getPoblacionTotalDeMexico() || 130273923,datosCountry["Confirmed"],datosCountry["Deaths"],datosCountry["Recovered"],datosCountry["Date"])
        
        // dashboardCountryInformation.innerHTML += `<p>Numero de muertes: ${ new Intl.NumberFormat("es-MX").format(datosCountry["Deaths"]) }</p>`
        // dashboardCountryInformation.innerHTML += `<p>Casos recuperados: ${ new Intl.NumberFormat("es-MX").format(datosCountry["Recovered"]) }</p>`
        // dashboardCountryInformation.innerHTML += `<p>Actualizado al ${ datosCountry["Date"] }</p>`
        
    } else {
        dashboardCountryInformation.innerHTML = `<p>Hubo un error de conexion, por favor vuelve a intentarlo<p>`    
    }

})

document.addEventListener( 'DOMContentLoaded', async () => {

    console.log("DOM cargado completamnete")
    console.log(  )

} )

