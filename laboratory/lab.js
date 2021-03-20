const bar = document.getElementById('bar')
const loaded = document.getElementById('bar_loaded')

let i =  10000
let current_porct = 100
let porct = 50

while(i > porct*100) {
    setTimeout( () => {
        loaded.style.width = current_porct + "%"
        current_porct -= 0.01
    }, 1*i);
    i--
}

console.log("Ahora es::", i)
console.log("Porc es::", i)

// (porct, element_father)

// (-----)          return: { id, bar }
// innerHTML(bar)
// (id, porct) 

