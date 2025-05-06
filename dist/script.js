"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const output = document.querySelector("output");
const en = document.getElementById("en");
const de = document.getElementById("de");
function randomize() {
    return __awaiter(this, void 0, void 0, function* () {
        output.innerHTML = "Loading...";
        output.style.display = "block";
        try {
            const language = en.checked ? "en" : "de";
            const response = yield fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`);
            const fact = yield response.json();
            output.textContent = fact.text;
        }
        catch (error) {
            output.innerHTML = error;
        }
    });
}
