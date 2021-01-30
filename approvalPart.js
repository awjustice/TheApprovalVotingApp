const checkboxes = document.querySelectorAll(".checkbox");
const chocolate1 = document.querySelector("#chocolate1");
const chocolate2 = document.querySelector("#chocolate2");
const vanilla = document.querySelector("#vanilla");
const cards = document.querySelectorAll(".card");
const appVoteButton = document.querySelector("#approvalVoteButton");
const mainText = document.querySelector("#mainText");

const homeReload = () => {
  document.location.href = "/";
};

appVoteButton.addEventListener("click", (e) => {
  if (
    !(checkboxes[0].checked || checkboxes[1].checked || checkboxes[2].checked)
  ) {
    alert("Select one or more of the candidates!");
    return false;
  }

  mainText.innerHTML =
    "Now one of the chocolate's wins!  A more accurate reflection of the voter's true preferences.  To learn more, go to " +
    "<a target=_blank href='https://www.electionscience.org'>ElectionScience.org</a>";

  cards.forEach((card) => card.classList.add("noHover"));
  appVoteButton.style.display = "none";
  checkboxes.forEach((checkbox) => (checkbox.style.visibility = "hidden"));
  chocolate2.classList.add("winner");
  chocolate1.classList.add("loser");
  vanilla.classList.add("loser");
  appVoteBarChocolate1.style.display = "block";
  appVoteBarChocolate2.style.display = "block";
  appVoteBarVanilla.style.display = "block";
});
