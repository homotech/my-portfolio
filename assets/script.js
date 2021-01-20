const sliderone = document.querySelector("#sliderone");
const slidertwo = document.querySelector("#slidertwo");
const sliderthree = document.querySelector("#sliderthree");
const sliderfour = document.querySelector("#sliderfour");
let counter = 0;
const incrementCounter = () => {
  switch (counter) {
    case 0:
      sliderone.style.opacity = "1.0";
      slidertwo.style.opacity = "0";
      sliderthree.style.opacity = "0";
      sliderfour.style.opacity = "0";
      break;
    case 1:
      sliderone.style.opacity = "0";
      slidertwo.style.opacity = "1.0";
      sliderthree.style.opacity = "0";
      sliderfour.style.opacity = "0";
      break;
    case 2:
      sliderone.style.opacity = "0";
      slidertwo.style.opacity = "0";
      sliderthree.style.opacity = "1.0";
      sliderfour.style.opacity = "0";
      break;
    case 3:
      sliderone.style.opacity = "0";
      slidertwo.style.opacity = "0";
      sliderthree.style.opacity = "0";
      sliderfour.style.opacity = "1.0";
      break;
  }
  if (counter > 3) {
    counter = 0;
  } else {
    counter += 1;
  }
  var t = setTimeout(incrementCounter, 6000);
};
incrementCounter();
