var setTheme = localStorage.getItem("theme");
if (setTheme == null) {
  swapStyle("style-light.css");
} else {
  swapStyle(setTheme);
}

function swapStyle(sheet) {
  document.getElementById("mystylesheet").href = `./css/${sheet}`;
  localStorage.setItem("theme", sheet);
}
