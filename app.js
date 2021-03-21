import { getDataOfCountry, getPopulationOf } from './localData/accesToData.js'
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
    if (!searchBoxPais.value) return

    titleNombreDelPais.textContent = "Nombre del país"
    dashboardCountryInformation.innerHTML = loaderDashboardPais.outerHTML
    loaderDashboardPais = document.getElementById('loader')
    loaderDashboardPais.style.display = 'block'

    // Recivimos una respuesta y limpiamos la interfaz
    const nameCountryInputedByUser = searchBoxPais.value
    const data = await getDataOfCountry( nameCountryInputedByUser)
    console.log("Recibi: ", data)

    searchBoxPais.value = ''
    loaderDashboardPais.style.display = 'none'
    

    // Verificamos si ocurrió un error
    if(data.messageError) {
        dashboardCountryInformation.innerHTML = `<p>${data.messageError}<p>`

    // Verificamos si nos llego un array de coincidencias
    } else if(data.length) {
        dashboardCountryInformation.innerHTML = `<p>Quizas quisiste decir:<p>`
        let coincidencesToAdd = ""

        coincidencesToAdd += `<p style="color: gray">`
        for(let coincidence of data) {
            coincidencesToAdd += `- ${coincidence.name} <br>`
        }
        coincidencesToAdd += `</p>`
        dashboardCountryInformation.innerHTML += coincidencesToAdd

    // Si no, pues nos llego la data del pais buscado
    } else {
        const nameCountry_ = data.name[0].toUpperCase() + data.name.slice(1)
        titleNombreDelPais.textContent = `${nameCountry_}`
        dashboardCountryInformation.innerHTML = `<p style="font-size:11px">Poblacion aproximada de ${nameCountry_} durante la pandemia: <b style="font-size: 12px">${Intl.NumberFormat("es-MX").format(getPopulationOf(nameCountryInputedByUser))}</b></p>`
        dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += confirmed(getPopulationOf(nameCountry_),data["Confirmed"],data["Deaths"],data["Recovered"],data["Date"])
        dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += recovered(getPopulationOf(nameCountry_), data["Confirmed"],data["Deaths"],data["Recovered"],data["Date"])
        dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += deaths(getPopulationOf(nameCountry_), data["Confirmed"],data["Deaths"],data["Recovered"],data["Date"])
    }


})

document.addEventListener( 'DOMContentLoaded', async () => {
    console.log("DOM cargado completamnete")
} )

