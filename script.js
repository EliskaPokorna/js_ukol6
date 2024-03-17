function justFood(pocetLidi) {
    const celkem = pocetLidi * 500
    return `catering od Just Food pro ${pocetLidi} lidí za ${celkem} Kč`
}

function yourMama(pocetLidi) {
    const celkem = pocetLidi * 1500
    return `catering od Your Mama pro ${pocetLidi} lidí za ${celkem} Kč`
}

function flavourHaven(pocetLidi) {
    const celkem = pocetLidi * 3000
    return `catering od Flavour Haven pro ${pocetLidi} lidí za ${celkem} Kč`
}

console.log(justFood(100))
console.log(yourMama(100))
console.log(flavourHaven(100))

const createEvent = (udalost, pocetLidi, fceCatering) => {
    const nazev = document.querySelector(".udalost");
    nazev.innerHTML += `${udalost} ${fceCatering(pocetLidi)}`
}

createEvent(
    `Událost Inaugurace prezidenta s`,
    150,
    flavourHaven
)