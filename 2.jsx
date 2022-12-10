function changeButtonContent() {
  var button = document.getElementById("my-button");

  button.innerHTML = "Button clicked";
}

var button = document.getElementById("my-button");

button.addEventListener("click", changeButtonContent);
