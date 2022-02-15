const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for(let i=0; i<6; ++i){
  const randomNumberFromArray = Math.floor(Math.random() * hex.length);
  hexColor += hex[randomNumberFromArray];  
 //done for this project
  }

 color.textContent = hexColor;
 document.body.style.background = hexColor;
 
//it would be better to create a function that contains floor function here! Math.floor(Math.random() * hex.length);


})

