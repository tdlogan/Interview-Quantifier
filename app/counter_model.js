//Creating the counter model
var Counter = Backbone.Model.extend({
  //Attaching an event listener onto the counter model
  initialize: function() {
    var that = this;
    that.on('change', function(){
      chrome.storage.sync.set({'interviewCount': that.get('interviewCount')}, function(){
        console.log('Saved');
      });
    });
    //Get Data from storage
    chrome.storage.sync.get('interviewCount', function(count){
      console.log(count.interviewCount);
      count.interviewCount = count.interviewCount || 0;
      that.set({interviewCount: count.interviewCount});
    });
  }
});


//Creating a new instance of the counter model
var counter = new Counter({
    interviewCount: 0
});

