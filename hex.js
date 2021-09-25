const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("button#btn");

btn.addEventListener("click",() => {
	let hexColor = "#";
	for(let i = 0; i<6;i++){
		hexColor += hex[randNum()];
	}
	document.body.style.backgroundColor = hexColor;
	document.querySelector("span.color").innerHTML = hexColor;
})

const randNum = () => {
	return Math.floor(Math.random() * hex.length);
}