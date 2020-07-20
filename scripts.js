const body = document.querySelector("body");
const mode = document.querySelector("#mode");
const bio = document.querySelector("#bio");

let speed = 100;
typeEffect(bio, speed);

// local storage to remember day/night mode
const theme = localStorage.getItem("theme");

if (theme == null) {
  document.documentElement.setAttribute("data-theme", "light");
} else if (theme == "dark") {
  document.documentElement.setAttribute("data-theme", theme);
  mode.checked = true;
} else if (theme == "light") {
  mode.checked = false;
  document.documentElement.setAttribute("data-theme", theme);
}

mode.addEventListener("click", function () {
  let attribute = document.documentElement.getAttribute("data-theme");
  if (attribute === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

function typeEffect(element, speed) {
  var text = element.innerHTML;
  element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}
