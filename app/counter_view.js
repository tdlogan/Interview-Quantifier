//Creating a new view for the counter
var CounterView = Backbone.View.extend({
    id: 'viewCounter',
    initialize: function() {
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
    },
    render: function(){
      var html = '<h1>' + this.model.get('interviewCount') + '</h1>';  
      return this.$el.html(html);
    },
    events: {
      'click h1': 'addInterview'
    },
    addInterview: function(){
      var interviews = this.model.get('interviewCount');
      interviews++;
      this.model.set({description: interviews});
      this.model.save();
    }
});

//Instantiating the view of the counter and referencing the counter model.
var counterView = new CounterView({
    model: counter
});

// counterView.render();

console.log(counterView.el);

// $(".count-container").html(counterView.$el);

// console.log($("div"))
$(function() {
  $(".count-container").append(counterView.render())
});


