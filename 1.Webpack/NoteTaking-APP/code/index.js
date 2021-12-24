import("./index.css");

let container = document.getElementById("container");
let inputPanel = document.getElementById("inputPanel");
let outputPanel = document.getElementById("outputPanel");
let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  let note = input.value;
  if (note) {
    let p = document.createElement("p");
    p.textContent = note;
    outputPanel.append(p);
  }
});
