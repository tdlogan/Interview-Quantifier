//Creating the counter model
var Counter = Backbone.Model.extend({
  //Attaching an event listener onto the counter model
  initialize: function() {
    this.on('change', function(){
      chrome.storage.sync.set({'interviewCount': this.interviewCount}, function(){
        console.log('Saved');
      });
    });
    //Get Data from storage
    var that = this;
    chrome.storage.sync.get('interviewCount', function(count){
      that.set({interviewCount: count.interviewCount});
    });
  }
});


//Creating a new instance of the counter model
var counter = new Counter({
    interviewCount: 0
});

