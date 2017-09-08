/*script модального окна НАЧАЛО*/

var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (event) {
event.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
if (!login.value || !password.value) {
  event.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  localStorage.setItem("login", login.value);
}
});

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (event) {
event.preventDefault();
mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (event) {
event.preventDefault();
mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
if (event.keyCode === 27) {
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});

window.addEventListener("keydown", function (event) {
if (event.keyCode === 27) {
  if (mapPopup.classList.contains("modal-show")) {
    mapPopup.classList.remove("modal-show");
  }
}
});
/*script модального окна КОНЕЦ*/
