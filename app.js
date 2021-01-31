const voteButton = document.querySelector("#voteButton");
const moreButton = document.querySelector("#moreButton");
const radios = document.querySelectorAll(".input");
const voteBar = document.querySelector("#voteBar");
const cards = document.querySelectorAll(".card");
const chocolate1 = document.querySelector("#chocolate1");
const chocolate2 = document.querySelector("#chocolate2");
const vanilla = document.querySelector("#vanilla");
const mainText = document.querySelector("#mainText");

const homeReload = () => {
  document.location.href = "index.html";
};

voteButton.addEventListener("click", () => {
  if (!(radios[0].checked || radios[1].checked || radios[2].checked)) {
    alert("Choose your ice cream!");
    return false;
  }

  mainText.innerHTML =
    "Vanilla wins in this case...even though most people prefer some form of chocolate";
  radios.forEach((radio) => (radio.style.visibility = "hidden"));
  cards.forEach((card) => card.classList.add("noHover"));
  moreButton.style.display = "block";
  voteButton.style.display = "none";
  voteBarChocolate1.style.display = "block";
  voteBarChocolate2.style.display = "block";
  voteBarVanilla.style.display = "block";
  vanilla.classList.add("winner");
  chocolate1.classList.add("loser");
  chocolate2.classList.add("loser");
});

moreButton.addEventListener("click", infoTextChange);

let clicks = -1;
let explanation = [
  "Approval voting lets you vote for all the candidates you approve of which in turn avoids this sort of negative scenario",
  "",
];

function infoTextChange() {
  clicks += 1;
  mainText.innerHTML = explanation[clicks - 1];
  if (clicks == 0) {
    mainText.innerHTML =
      "The chocolate lovers split their vote between the two choices.  This happens all the time in real elections.";
    moreButton.innerHTML = "Show me a better way";
  }
  if (clicks == 1) {
    moreButtonChange();
  }
  if (clicks == 2) {
    location.assign("approval.html");
  }
}

const moreButtonChange = () => {
  moreButton.innerHTML = "Let's try it!";
  moreButton.classList = "ui green button massive ui button";
};
