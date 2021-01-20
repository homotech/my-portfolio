const webdesign = document.querySelector("#webdesign");
const illustration = document.querySelector("#illustration");
const graphics = document.querySelector("#graphics");
const section = document.querySelector("#sections");
const wd = document.querySelector(".wd");
const illu = document.querySelector(".illu");
const gd = document.querySelector(".gd");

const sectiontoggle = (choice) => {
  switch (choice) {
    case "webdesign":
      section.classList.add("web-active");
      section.classList.remove("illustration-active");
      section.classList.remove("graphicsdesign-active");
      webdesign.style.color = "#fff";
      illustration.style.color = "#000";
      graphics.style.color = "#000";
      wd.style.width = "100%";
      illu.style.width = "0";
      gd.style.width = "0";

      break;
    case "illustration":
      section.classList.add("illustration-active");
      section.classList.remove("web-active");
      section.classList.remove("graphicsdesign-active");
      wd.style.width = "0";
      illu.style.width = "100%";
      gd.style.width = "0";
      webdesign.style.color = "#000";
      illustration.style.color = "#fff";
      graphics.style.color = "#000";
      break;
    case "graphics":
      section.classList.add("graphicsdesign-active");
      section.classList.remove("web-active");
      section.classList.remove("illustration-active");
      wd.style.width = "0";
      illu.style.width = "0";
      gd.style.width = "100%";
      webdesign.style.color = "#000";
      illustration.style.color = "#000";
      graphics.style.color = "#fff";
      break;
  }
};
sectiontoggle("webdesign");
webdesign.addEventListener("click", () => sectiontoggle(event.target.id));
illustration.addEventListener("click", () => sectiontoggle(event.target.id));
graphics.addEventListener("click", () => sectiontoggle(event.target.id));
