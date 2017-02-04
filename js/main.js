//array
var iceCream = ["Strawberry", "Butter Pecan", "Coffee"];
iceCream.push("Cookie Dough");


//presidents
var presidents = [
  {firstName: "Donald", lastName: "Trump", termLength: "1", party: "Republican", yearsOfPresidency: "0"},
  {firstName: "Barack", lastName: "Obama", termLength: "2", party: "Democrat", yearsOfPresidency: "8"},
  {firstName: "George W.", lastName: "Bush", termLength: "2", party: "Republican", yearsOfPresidency: "8"},
  {firstName: "Bill", lastName: "Clinton", termLength: "1", party: "Democrat", yearsOfPresidency: "4"},
  {firstName: "George H. W.", lastName: "Bush", termLength: "1", party: "Republican", yearsOfPresidency: "4"}
];
console.log(presidents[2].firstName + presidents[2].lastName);

//functions
//6a
function howdy () {
  console.log("Amanda Cheng says aloha!");
}
howdy();

//6b
var numba = function (string) {
  if (string.length < 7) {
    console.log("What a short little word!");
  }
  else if (string.length == 7) {
    console.log("7, what a perfect choice!");
  }
  else {
    console.log("I'm sorry, but that's too many to count.");
  }
}

numba("7");
numba("seventy");
numba("university");

//6c
function inception (display, favMovie) {
  return display + favMovie;
}

var favMovie = inception("Moana", " is a fantastic movie.");
console.log(favMovie);
