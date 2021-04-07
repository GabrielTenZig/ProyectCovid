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

    // EVENTOS
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
}
