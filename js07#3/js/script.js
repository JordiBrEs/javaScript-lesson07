var dropDown = document.querySelector("#moods");
var body = document.querySelector("body");

// mood.addEventListener("change", function (e) {
//  var
//   // feeling = e.function.value;
//   // if (feeling === "sad") {
//   //   if (body.classList.contains("happy")) {
//   //     body.classList.remove("happy");
//   //     body.classList.add("sad");
//   //   } else if (feeling === "passionate") {
//   //     body.classList.add("passionate");
//     });

console.log(dropDown);

dropDown.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (mood === "sad") {
    body.classList.remove("happy");
    body.classList.remove("passionate");
    body.classList.add("sad");
  } else if (mood === "passionate") {
    body.classList.remove("sad");
    body.classList.remove("happy");
    body.classList.add("passionate");
  }
});
