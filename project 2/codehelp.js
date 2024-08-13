const containerEl = document.querySelector(".animated");

const careers = ["Love", "Babber"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <p> ${careers[careerIndex].slice(0, 0)} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</p>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 500);
}
    