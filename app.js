const body = document.body;
const darkModeBtn = document.querySelector("#dark-mode-btn");

const aboutSkillsTexts = document.querySelectorAll(".text-light ");

darkModeBtn.addEventListener("click", () => {
	body.classList.toggle("body-dark-mode");

	aboutSkillsTexts.forEach((element) => {
		element.classList.toggle("text-dark");
	});
	textPrimary.forEach((element) => {
		element.classList.toggle("text-dark");
	});
});
