export const barCharge = (porcentage) => {
    const id = Math.random()
    const bar = 
    `<div class="bar"> \
        <span class="bar__loaded" id="${id}"></span>\
    </div>`

    setTimeout( () => {

        const bar_loaded = document.getElementById(id)
        let i =  10000
        let current_porct = 100

        while(i > porcentage*100) {
            setTimeout( () => {
                bar_loaded.style.width = current_porct + "%"
                current_porct -= 0.01
            }, 0.3*i);
            i--
        }
    }, 200)

    return bar
}