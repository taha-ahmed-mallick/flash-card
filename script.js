document.querySelector("#home > div > div").addEventListener("contextmenu", (e) => console.log(e));

let sections = document.querySelectorAll("section");
let lists = [];

window.onload = () => {
	if (localStorage.getItem("lists") == null) {
		localStorage.setItem("lists", null);
	}
};

let createListBtn = document.querySelector(".create-list");
createListBtn.addEventListener("click", () => {
	sections[2].classList.remove("show");
	sections[0].classList.add("show");
});

let closeBtns = document.querySelectorAll(".close");
closeBtns.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		sections[index].classList.remove("show");
		sections[2].classList.add("show");
	});
});
let approveList = document.querySelector(".check");
approveList.addEventListener("click", () => {
	sections[0].classList.remove("show");
	sections[2].classList.add("show");
});
