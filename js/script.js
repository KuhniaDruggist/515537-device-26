//Форма обратной связи//
var feedbacklink = document.querySelector(".button-feedback");
var feedbackpopup = document.querySelector(".write-us");
var feedbackclose = feedbackpopup.querySelector(".modal-close");
var feedbackform = feedbackpopup.querySelector("form");
var feedbackname = feedbackpopup.querySelector("[name=full-name]");
var feedbackemail = feedbackpopup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbacklink.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackpopup.classList.add("modal-show");
	if (storage) {
		feedbackname.value = storage;
    feedbackemail.focus();
	} else {
		feedbackname.focus();
	}
});

feedbackclose.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedbackpopup.classList.remove("modal-show");
	feedbackpopup.classList.remove("modal-error");
});

feedbackform.addEventListener("submit", function(evt) {
	if (!feedbackname.value || !feedbackemail.value) {
	evt.preventDefault();
	feedbackpopup.classList.remove("modal-error");
	feedbackpopup.offsetWidth = feedbackpopup.offsetWidth;
	feedbackpopup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", feedbackname.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
  	evt.preventDefault();
  	if (feedbackpopup.classList.contains("modal-show")) {
  		feedbackpopup.classList.remove("modal-show");
  		feedbackpopup.classList.remove("modal-error");
  	}
  }
});


//Карта//
var maplink = document.querySelector(".contacts-map");
var mappopup = document.querySelector(".modal-map");
var mapclose = mappopup.querySelector(".modal-close");

maplink.addEventListener("click", function(evt) {
 	evt.preventDefault();
 	mappopup.classList.add("modal-show");
});

mapclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
  	evt.preventDefault();
  	if (mappopup.classList.contains("modal-show")) {
  		mappopup.classList.remove("modal-show");
  	}
  }
});