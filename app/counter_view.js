//Creating a new view for the counter
var CounterView = Backbone.View.extend({
  id: 'viewCounter',
  initialize: function() {
    //Set up a listener to listen for increments on the counter.
    this.listenTo(this.model, "change", this.render);
  },
  render: function(){
    //Setting up the view to be rendered on the DOM.
    var html = '<h1>' + this.model.get('interviewCount') + '</h1>';  
    return this.$el.html(html);
  },
  events: {
    //Set up click event for adding interviews.
    'click h1': 'addInterview'
  },
  addInterview: function(){
    //Adding an interview to our total count.
    var addOne = this.model.get('interviewCount');
    addOne++;
    this.model.set({interviewCount: addOne});
  }
});



