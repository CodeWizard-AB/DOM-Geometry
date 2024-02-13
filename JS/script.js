"use strict";

document.querySelector(".geometry").addEventListener("click", function (e) {
	const value1 = this.querySelector(".input-1").value;
	const value2 = this.querySelector(".input-2").value;
	if (e.target.classList.contains("btn") && value1 && value2) {
		console.log(0.5 * value1 * value2);
	}
});
