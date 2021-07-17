console.log("Trueeee")
import { getDataOfCountry, getPopulationOf } from './localData/accesToData.js'
import { confirmed, recovered, deaths } from './components/Components.js'
import { separator } from './components/Separator.js'
import { initEvents } from './Events.js'
import { months } from './localData/Months.js'
import { contries } from './localData/Contries.js'


// #### Elementos dentro del Dashboard Pais ###
const searchBoxPais = document.getElementById('v_pais-selected')
const dashboardCountryInformation = document.getElementById('dashboard-pais__informacion')
const titleNombreDelPais = document.getElementById('v_nombre-pais')
let loaderDashboardPais = document.getElementById('loader')

const dataListPaises = document.getElementById('datalist_paises')
// const loeaderHTML = document.getElementById('loader').outerHTML

initEvents();
console.log("Trueeee")


// Agregamos los paises a la datalist
contries.forEach((pais) => {
    dataListPaises.innerHTML += `<option value="${pais.name}"></option>`
})

loaderDashboardPais.style.display = 'none'


searchBoxPais.addEventListener ('change', () => { 
    showCountryData()    
 });
searchBoxPais.addEventListener('keydown', async (e) => {
    if (e.key != "Enter") return
    showCountryData()
})

document.addEventListener( 'DOMContentLoaded', async () => {
    console.log("DOM cargado completamnete")
} )


//////////////////  FUNCIONES   /////////////////////
const showCountryData = async () => {
    if (!searchBoxPais.value) return

    titleNombreDelPais.textContent = ""
    dashboardCountryInformation.innerHTML = loaderDashboardPais.outerHTML
    loaderDashboardPais = document.getElementById('loader')
    loaderDashboardPais.style.display = 'block'

    // Recivimos una respuesta y limpiamos la interfaz
    const nameCountryInputedByUser = searchBoxPais.value
    const data = await getDataOfCountry(nameCountryInputedByUser)
    console.log("Recibi: ", data)

    searchBoxPais.value = ''
    loaderDashboardPais.style.display = 'none'
    
    if(data.messageError) {
        dashboardCountryInformation.innerHTML = `<p>${data.messageError}<p>`

    }  else {
        titleNombreDelPais.textContent = `${nameCountryInputedByUser}`
        dashboardCountryInformation.innerHTML = `<p class="element" style="font-size:11px">Poblacion aproximada de ${nameCountryInputedByUser} durante la pandemia: <b style="font-size: 12px">${Intl.NumberFormat("es-MX").format(getPopulationOf(nameCountryInputedByUser))}</b></p>`
        // dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += confirmed(getPopulationOf(nameCountryInputedByUser),data["Confirmed"])
        // dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += recovered(getPopulationOf(nameCountryInputedByUser),data["Recovered"])
        // dashboardCountryInformation.innerHTML += separator()
        dashboardCountryInformation.innerHTML += deaths(getPopulationOf(nameCountryInputedByUser),data["Deaths"])
        // dashboardCountryInformation.innerHTML += separator()
        
        console.log("Data: ", data)
        const fecha = new Date(data["Date"])
        dashboardCountryInformation.innerHTML += `<footer class="element"><time datetime="${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}">Datos actualizados al: ${fecha.getDate()+1} de ${months[fecha.getMonth()]} del ${fecha.getFullYear()}</time></footer>`
    }

}
