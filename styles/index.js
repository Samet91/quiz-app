/*one bookmark of home-page*/ 
const bookmark = document.querySelector(".js-bookmark");
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});
/*show button*/ 
const showButton = document.querySelector(".card__button");
const answer = document.querySelector(".card__text--answer");
const textShow = document.querySelector('.js-show')
const textHide = document.querySelector('.js-hide')

showButton.addEventListener("click", () => {
  answer.classList.toggle("hidden")
  textShow.classList.toggle("hidden")
  textHide.classList.toggle('hidden')
});

