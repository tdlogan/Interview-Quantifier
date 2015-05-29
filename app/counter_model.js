//Creating the counter model
var Counter = Backbone.Model.extend({
  //Attaching an event listener onto the counter model
  initialize: function() {
    //Setting the context of this for each instance of the counter model
    var that = this;
    that.on('change', function(){
      chrome.storage.sync.set({'interviewCount': that.get('interviewCount')}, function(){
        console.log('Saved');
      });
    });
    //Getting data from chrome storage to be displayed on the view
    chrome.storage.sync.get('interviewCount', function(count){
      console.log(count.interviewCount);
      count.interviewCount = count.interviewCount || 0;
      that.set({interviewCount: count.interviewCount});
    });
  }
});


