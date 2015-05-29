//In this file I am creating all instances of the necessary model and views 
//as well appending the views to the DOM.


//Creating a new instance of the counter model
var counter = new Counter({
  interviewCount: 0
});

//Instantiating the view of the counter and referencing the counter model.
var counterView = new CounterView({
  model: counter
});

//Appending the view to the DOM.
$(function() {
  $(".count-container").append(counterView.render());
});