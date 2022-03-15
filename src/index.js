const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


let count = 0;

number.innerText = count;

const updateText = () =>{
  number.innerText = count;
}

const handleAdd =() =>{
  console.log("add");
  count = count + 1;
  updateText();

}
const handleMinus =()=>{
 console.log("minus");
  count = count -1;
  updateText();
}
add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);