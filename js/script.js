var form = document.querySelector(".contacts .btn");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".close");
var login = popup.querySelector("[name=login]");
var popupBg = document.querySelector(".popup-bg")


form.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-show");
  popup.classList.add("form-show");
  popupBg.classList.add("popup-show");
  popupBg.classList.add("bg-show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
  popupBg.classList.remove("popup-show");
});

popupBg.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
  popupBg.classList.remove("popup-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-show")) {
popup.classList.remove("popup-show");
popupBg.classList.remove("popup-show");
popup.classList.remove("modal-error");
    }
  }
});

function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
zoom: 17,
center: {lat: 59.938905, lng: 30.319861}
});

var image = 'img/map-pointer.png';
var beachMarker = new google.maps.Marker({
position: {lat: 59.938575, lng: 30.322961},
map: map,
icon: image
});
}