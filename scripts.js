const inputs = document.querySelectorAll(".slider-wrapper");
const box = document.querySelector("div#box");

inputs.forEach(inp => inp.addEventListener("input", generateBorder));

function generateBorder() {
    const supEsq = document.querySelector("input#box-sup-esq").value;
    const infEsq = document.querySelector("input#box-inf-esq").value;
    const supDir = document.querySelector("input#box-sup-dir").value;
    const infDir = document.querySelector("input#box-inf-dir").value;

    let borderGerate = `${supEsq || 0}% ${supDir || 0}% ${infDir || 0}% ${infEsq || 0}%`;

    box.style.borderRadius = borderGerate;
}