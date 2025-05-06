const output = document.querySelector("output") as HTMLOutputElement;
const en = document.getElementById("en") as HTMLInputElement;
const de = document.getElementById("de") as HTMLInputElement;

async function randomize(): Promise<void> {
    output!.innerHTML = "Loading...";
    output!.style.display = "block";
    try {
        const language = en!.checked ? "en" : "de";
        const response = await fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`);
        const fact = await response.json();
        output!.textContent = fact.text;
    } catch (error) {
        output!.innerHTML = error as string;
    }
}