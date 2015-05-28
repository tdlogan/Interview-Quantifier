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
      'click h1': 'addInterview',
      'click h1': 'saveChanges'
    },
    addInterview: function(){
      var addOne = this.model.get('interviewCount');
      addOne++;
      this.model.set({interviewCount: addOne});
      this.model.save({interviewCount: addOne});
    },
    saveChanges: function(){
      var savedInterviews = this.model.get('interviewCount');
      chrome.storage.sync.set({'interviewCount': savedInterviews}, function() {
        //Notification that the data has been saved.
        message('Saved Interviews');
      });
    }
});

//Instantiating the view of the counter and referencing the counter model.
var counterView = new CounterView({
    model: counter
});

$(function() {
  $(".count-container").append(counterView.render())
});


