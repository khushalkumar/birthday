document.getElementById("main").addEventListener("click", multiply);

function multiply() {
  // console.log(screen.availWidth);
  // console.log(screen.availHeight);
  let height = screen.availHeight;
  let width = screen.availWidth;
  // let random = makeRandom(width, height);
  let randomHeight = Math.floor(Math.random() * height) + 1;
  let randomWidth = Math.floor(Math.random() * width) + 1;
  let randomRColor = Math.floor(Math.random() * 255) + 1;
  let randomGColor = Math.floor(Math.random() * 255) + 1;
  let randomBColor = Math.floor(Math.random() * 255) + 1;
  let number = Math.floor(Math.random() * 6) + 1;
  // let hType = h + number;
  let randomHTag = document.createElement(`h${number}`);
  // randomHTag.style.height = randomHeight;
  // randomHTag.style.width = randomWidth;
  randomHTag.style.color = `rgb(${randomRColor}, ${randomGColor}, ${randomBColor})`;

  randomHTag.style.position = "fixed";
  randomHTag.style.top = `${randomHeight}px`;
  randomHTag.style.left = `${randomWidth}px`;
  randomHTag.style.className = `chmon`;

  randomHTag.appendChild(document.createTextNode("You're old!"));

  document.getElementById("main").appendChild(randomHTag);

  console.log(randomHTag.className);
  // console.log(randomRColor);
  console.log(document.getElementById("main"));
}

// function makeRandom(width, height) {
//   let randomHeight = Math.floor(Math.random() * height) + 1;
//   let randomWidth = Math.floor(Math.random() * width) + 1;

// }
