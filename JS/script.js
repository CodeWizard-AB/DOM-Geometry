"use strict";

document.querySelectorAll(".geometry").forEach((card) => {
	card.addEventListener("click", function (e) {
		let area;
		const value1 = this.querySelector(".input-1").value;
		const value2 = this.querySelector(".input-2").value;
		const figure = this.querySelector("img").getAttribute("alt");
		if (e.target.classList.contains("btn") && value1 && value2) {
			if (
				figure === "triangle" ||
				figure === "pentagon" ||
				figure === "rhombus"
			) {
				area = 0.5 * value1 * value2;
			} else if (figure === "ellipse") {
				area = Math.PI * value1 * value2;
			} else {
				area = value1 * value2;
			}
			document.querySelector(".result").textContent = `${area.toFixed(2)} cm²`;
			document.querySelectorAll("input").forEach((input) => (input.value = ""));
		}
	});
});
