let ratingButton = $(".rating_each-circle");
let finalRating;
let submitRating = $(".submit-button");
let ratingResult = $(".rating-selected_number");
// console.log(ratingButton);

ratingButton.click((e) => {
  ratingButton.removeClass("clicked");
  $(e.currentTarget).addClass("clicked");
  finalRating = $(".clicked");
  //   console.log(finalRating.text());
});

submitRating.click(() => {
  ratingResult.text(finalRating.text());
  //   console.log(ratingResult.text());
  $(".default").addClass("hide-content");
  $(".rated").removeClass("hide-content");
  //   console.log(ratingResult);
});
