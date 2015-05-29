//Creating a new view for the counter
var CounterView = Backbone.View.extend({
  id: 'viewCounter',
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
  render: function(){
    var html = '<h1>' + this.model.get('interviewCount') + '</h1>';  
    return this.$el.html(html);
  },
  events: {
    'click h1': 'addInterview'
  },
  addInterview: function(){
    var addOne = this.model.get('interviewCount');
    addOne++;
    this.model.set({interviewCount: addOne});
  }
});

//Instantiating the view of the counter and referencing the counter model.
var counterView = new CounterView({
    model: counter
});

$(function() {
  $(".count-container").append(counterView.render())
});


