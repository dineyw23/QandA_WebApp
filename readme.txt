Description:

A simple Question and Answer WebApp I put together for my website(dailycode.org). 
Live Q&A sessions can be held with scoring feature. It is a demo application created using 
PubNub's JavaScript SDK and Pub/Sub API. There are no dependencies except a KEYS for API.
Used HTML5, CSS,jQuery,Tachyons and JavaScript.

Steps to use run the demo:

1. Navigate to app directory.
2. Replace the KEYS in QandA_receiver.js and QandA.js with your own key.
3. Open QandA.html(Publisher), QandA_receiver.html(Receiver) and index.html(Optional) in a browser of your choice.
4. Type and send a question from Publisher and check Receiver.
5. Type and Send the answer to the question from Receiver to Publisher.
6. The Publisher can either comment on the answer or give the correct answer.
7. Score the answer on the scale of 0-5.
8. Make sure Receiver gets the score.
9. Keep on going!! Check out the demo video in the links below.

Notes:

1. App dir has all the source code or check out links below for GitHub.
2. I used scss initially and then generated css using jekyll, to remove dependency.
3. index.html file is not relevant to PubNub API.
4. QandA.html has the publisher's end and QandQ_receiver.html has the receiver's end code. 
5. Receiver can also publish answer to the Publisher.
6. Score is calculated and displayed to Receiver only.
7. Multiple clients work but not this simple app is for single client-server.

Links:

   GitHub: https://github.com/dineyw23/QandA_WebApp 
   YouTube: https://youtu.be/9d6sGmoGyhE
   Coming soon: http://www.daiycode.org
