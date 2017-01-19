(function start(){
//Closure scope
var dailyCode;
var qArea = $('enterq'), 
    aArea = $('enter-a'),
    aDisplay = $('render-ans'),
    qDisplay = $('render-ques'),
    score = $('scoring'),
    aSubmit = $('Submit-A'),
    sSubmit = $('Submit-S'),
    qSubmit = $('Submit-Q'),
    channel = ['dailyCodeQ','dailyCodeA','dailyCodeS'];
function $(id) { return document.getElementById(id); }

//Instantiate
dailyCode = new PubNub({
   subscribeKey: 'demo', 
   publishKey: 'demo'
});

//Adding listener to channel
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
    },
    status: function(s) {
        console.log(s);
    }
});

//Getting started with SUBSCRIBE
dailyCode.subscribe({   
      channels : channel
});

//Publish the score to client
//Not displayed to server
function publishScore() {
   dailyCode.publish({
      message: score.value,
      channel: ['dailyCodeS'],
      x : (score.value='')
   });
}

// ****Publishing****
// Sending Questions 
function publishQues() {
   dailyCode.publish({
      message: qArea.value,
      channel: ['dailyCodeQ'],
      x : (qArea.value='')
   });
}
//Publish correct answers
function publishAns() {
   dailyCode.publish({
      message: aArea.value,
      channel: ['dailyCodeA'],
      x : (aArea.value='')
   });
}


//************************************** HELPERS *****************************//

qArea.addEventListener('keyup', function(e) {
   if(qArea.value.trim() != "") 
   {
      if((e.keyCode || e.charCode) === 13)
         publishQues();
   }
   else 
      console.log("Please enter a question!");
});

qSubmit.addEventListener('click', function() {
   if(qArea.value.trim() != "") 
         publishQues();
   else
      console.log("Please enter a question!");
});

aArea.addEventListener('keyup', function(e) {
   if(aArea.value.trim() != "") 
   {
      if((e.keyCode || e.charCode) === 13)
         publishAns();
   }
   else 
      console.log("Please enter the answer!");
});

aSubmit.addEventListener('click', function() {
   if(aArea.value.trim() != "") 
      publishAns();
   else
      console.log("Please enter a question!");
});

sSubmit.addEventListener('click', function() {
      publishScore();
});
}) ();

