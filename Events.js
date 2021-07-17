export const initEvents = () => {

    // BOTONES de NAV-BAR
    const butonMexico = document.getElementById('check-mexico')
    const butonPais = document.getElementById('check-pais')
    const butonGlobal = document.getElementById('check-global')
    const butonAbout = document.getElementById('check-about')

    // DASHBOARDS
    const dashboardMexico = document.getElementById('dash-mexico')
    const dashboardPais = document.getElementById('dash-pais')
    const dashboardGlobal = document.getElementById('dash-global')
    const dashboardAbout = document.getElementById('dash-about')

    // POSISIONADO
    dashboardPais.style.zIndex = '1'
    dashboardGlobal.style.zIndex = '4'
    dashboardAbout.style.zIndex = '2'
    dashboardMexico.style.zIndex = '3'

    dashboardMexico.style.left = '-100%'
    dashboardPais.style.left = '-100%'
    dashboardGlobal.style.left = '0%'
    dashboardAbout.style.left = '100%'

    butonGlobal.classList.add("option-button--selected")

    // EVENTOS
    butonMexico.addEventListener('click', () => {
        dashboardMexico.style.left = '0%'
        dashboardPais.style.left = '100%'
        dashboardGlobal.style.left = '100%'
        dashboardAbout.style.left = '100%'

        addSelectedButonClassTo(butonMexico, [butonMexico, butonPais, butonGlobal, butonAbout])
    })

    butonPais.addEventListener('click', () => {
        dashboardMexico.style.left = '-100%'
        dashboardPais.style.left = '0%'
        dashboardGlobal.style.left = '100%'
        dashboardAbout.style.left = '100%'

        addSelectedButonClassTo(butonPais, [butonMexico, butonPais, butonGlobal, butonAbout])
    })

    butonGlobal.addEventListener('click', () => {
        dashboardMexico.style.left = '-100%'
        dashboardPais.style.left = '-100%'
        dashboardGlobal.style.left = '0%'
        dashboardAbout.style.left = '100%'

        addSelectedButonClassTo(butonGlobal, [butonMexico, butonPais, butonGlobal, butonAbout])
    })

    butonAbout.addEventListener('click', () => {
        dashboardMexico.style.left = '-100%'
        dashboardPais.style.left = '-100%'
        dashboardGlobal.style.left = '-100%'
        dashboardAbout.style.left = '0%'

        addSelectedButonClassTo(butonAbout, [butonMexico, butonPais, butonGlobal, butonAbout])
    })
}

const addSelectedButonClassTo = (butonElement, allButons) => {
    allButons.map(elem => elem.classList.remove("option-button--selected"))

    butonElement.classList.add("option-button--selected")
}