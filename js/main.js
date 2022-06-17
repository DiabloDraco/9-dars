var elHeader = document.querySelector(".header__container");
var elBtn = document.querySelector(".header__button");

elBtn.addEventListener("click", ( )=> {
    elHeader.classList.toggle("header__container--active")
})

var elForm = document.querySelector(".drink__right-list")

elForm.addEventListener("click", function(evt) {
  var clickedItem = evt.target.classList;

  if (clickedItem == "drink__list-arrow") {
    var parentClass = evt.target.parentNode.closest(".drink__form-item")

    parentClass.classList.toggle("drink__r-item--open")
  }
})