
// Different Selectors

// document.getElementsByTagName("h1") -> returns an array of all the elements that are an h1 tag

// document.getElementsByClassName("classname") -> returns an array of all the elements with a class on classname

// document.getElementById("thereCanOnlyBeOne") -> returns a DOM object that contains that ID

// document.querySelector("h1") -> returns the first element(object) with that tag name
// document.querySelector(".classname") -> returns the first element(object) with that class
//document.querySelector("#thereCanOnlyBeOne") -> returns the first element(object) with that id

// document.querySelectorAll("h1") -> returns an array of all the elements with that tag
// document.querySelectorAll(".classname") -> returns an array of all the elements with that class
// document.querySelectorAll("#thereCanOnlyBeOne") -> returns an array of all the elements with that id (there should only be one)

var button = document.querySelector(".addImg")
var content = document.querySelector(".content")

button.addEventListener("click", function() {
  var img = document.createElement("img")
  img.src = "https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/96/thumbs-up-sign_1f44d.png"
  content.appendChild(img)
})
