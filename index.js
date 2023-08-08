const ratingButton = $(".rating_each-circle");
const submitRating = $(".submit-button");
const ratingResult = $(".rating-selected_number");
// console.log(ratingButton);
let finalRating;

ratingButton.click((e) => {
  ratingButton.removeClass("clicked");
  $(e.currentTarget).addClass("clicked");
  finalRating = $(".clicked");
  //   console.log(finalRating.text());
});

submitRating.click(() => {
  if (finalRating != undefined) {
    ratingResult.text(finalRating.text());

    $(".default").addClass("hide-content");
    $(".rated").removeClass("hide-content");
  } else {
    // IF ANY NUMBER IS SELECTED DO THIS (SHOW ANIMATION ERROR)
    $(".error-submit").removeClass("hide-content");
    $(".container").css("padding-bottom", "2rem");
    $(".error-submit").animate({
      opacity: "0.3",
      opacity: "0.5",
      opacity: "0.7",
      opacity: "0.9",
      opacity: "1",
    });
  }
});
