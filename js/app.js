import { getCountryData, getSumary } from './apiCovid.js'

const butonPais = document.getElementById('check-pais')
const butonGlobal = document.getElementById('check-global')
const butonAbout = document.getElementById('check-about')

butonPais.style.color = 'white'
butonGlobal.style.color = 'white'
butonAbout.style.color = 'white'

// Swipe de los dashboards
const dashboardPais = document.getElementById('dash-pais')
// const dashboardGlobal = document.getElementById('dash-global')
const dashboardAbout = document.getElementById('dash-about')

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


// Detectar enter para buscar un pais en Dashboard Pais
const serachBoxPais = document.getElementById('v_pais-select')

// Cundo terminen de escribir el pais que buscan
serachBoxPais.addEventListener('keydown', async (e) => {
    if (e.key != "Enter") return

    serachBoxPais.textContent = ''
    let nombrePais = serachBoxPais.value

    document.getElementById('v_nombre-pais').textContent = nombrePais

    // const data = await getCountryData(nombrePais)
    // const data = await getSumary()
    // const data = await translate(nombrePais)

    // console.log('Obtuvimos: ', data )
})


console.log("It works")