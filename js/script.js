var feedbackLink = document.querySelector(".button-feedback");
var feedbackPopup = document.querySelector(".write-us");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackName = feedbackPopup.querySelector("[name=full-name]");
var feedbackEmail = feedbackPopup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("modal-show");
	if (storage) {
		feedbackName.value = storage;
    feedbackEmail.focus();
	} else {
		feedbackName.focus();
	}
});

feedbackClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-show");
	feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt) {
	if (!feedbackName.value || !feedbackEmail.value) {
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-error");
	feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
	feedbackPopup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", feedbackName.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
  	evt.preventDefault();
  	if (feedbackPopup.classList.contains("modal-show")) {
  		feedbackPopup.classList.remove("modal-show");
  		feedbackPopup.classList.remove("modal-error");
  	}
  }
});

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
 	evt.preventDefault();
 	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
  	evt.preventDefault();
  	if (mapPopup.classList.contains("modal-show")) {
  		mapPopup.classList.remove("modal-show");
  	}
  }
});