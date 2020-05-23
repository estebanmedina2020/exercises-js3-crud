const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
console.log(myParam);
var form = document.getElementById("form");
form.addEventListener("submit", validate);
function validate() {
  var title = document.getElementById("title");
  var href = document.getElementById("href");
}
