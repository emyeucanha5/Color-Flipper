const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("button#btn");
const randColor = () => {
	return Math.floor(Math.random()*colors.length);
}
btn.addEventListener("click", ()=>{
	const randomNumber = randColor();
	document.body.style.backgroundColor = colors[randomNumber]
	document.querySelector("span.color").innerHTML = colors[randomNumber];

} );
