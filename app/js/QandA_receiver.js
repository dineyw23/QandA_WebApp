(function start(){
//Closure Scope
var dailyCode;
var aArea = $('enter-a'),
    aDisplay = $('render-ans'),
    qDisplay = $('render-ques'),
    sDisplay = $('displayScore'),
    sOut = $('outScore'),
    aSubmit = $('Submit-A'),
    channel = ['dailyCodeQ','dailyCodeA','dailyCodeS'];
function $(id) { return document.getElementById(id); }



//Instantiate
dailyCode = new PubNub({
   subscribeKey: 'sub-c-be0bda18-dd4b-11e6-a669-0619f8945a4f',
   publishKey: 'pub-c-c66d32d5-60d2-46ab-afe9-729956000e98', 
});

//Add Listener to all channels
dailyCode.addListener({

    message: function(obj){
         var channelName = obj.channel;
         if(channelName == ['dailyCodeQ'])
         {
            qDisplay.innerHTML = obj.message;
            aDisplay.innerHTML = "";
         }
         else if(channelName == ['dailyCodeA'])
            aDisplay.innerHTML = obj.message;
         else{
            var finalScore = parseInt(obj.message);
            var outOf = parseInt(outScore.innerHTML);
            finalScore = parseInt(sDisplay.innerHTML)+finalScore;
            sDisplay.innerHTML = finalScore;
            outOf = parseInt(5) + outOf;
            sOut.innerHTML = outOf;
         }
    },
    status: function(s) {
        console.log(s);
    }
});

//Subscribe to all 
dailyCode.subscribe({   
      channels : channel
});

//Publish only answer to server
function publishAns() {
   dailyCode.publish({
      message: aArea.value,
      channel: ['dailyCodeA'],
      x : (aArea.value='')
   });
}


//******************************** Helpers *****************************//
//Publish answer to server by enter key
aArea.addEventListener('keyup', function(e) {
   if(aArea.value.trim() != "") 
   {
      if((e.keyCode || e.charCode) === 13)
         publishAns();
   }
   else
   {  
      console.log("Please enter the answer!");
   }
});

//Publish ans to the server by Submit button
aSubmit.addEventListener('click', function() {
   if(aArea.value.trim() != "") 
      publishAns();
   else
      console.log("Please enter a question!");
});

}) ();
