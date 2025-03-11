const output = document.querySelector("output")
const en = document.getElementById("en")
const de = document.getElementById("de")
let language;

async function randomize() {
    try {
        const language = en.checked ? "en" : "de"
        const response = await fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`)
        const fact = await response.json()
        output.textContent = fact.text
    } catch (error) {
        output.innerHTML = error
    }
    output.style.display = "block"
}