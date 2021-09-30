var firebaseConfig = {
    apiKey: "AIzaSyDpgCwUJr8DYvJpys2WGKw1zL1fk1BeZX8",
    authDomain: "chatpp-32685.firebaseapp.com",
    databaseURL: "https://chatpp-32685-default-rtdb.firebaseio.com",
    projectId: "chatpp-32685",
    storageBucket: "chatpp-32685.appspot.com",
    messagingSenderId: "481966409242",
    appId: "1:481966409242:web:e11e4b2d67e76d530033a3",
    measurementId: "G-D5CJG2V3ZJ"
  };

firebase.initializeApp(firebaseConfig);

function getData() 
{
      firebase.database().ref("/"+roomname).on(
      'value', function(snapshot) 
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val();
                  if(childKey != "purpose")
                  {
                        firebaseMessageId = childKey;
                        messageData = childData;
                        console.log(firebaseMessageId);
                        console.log(messageData);

                        _name = messageData["_name"];
                        message = messageData["message"];
                        like = messageData["like"];

                        nameWithTag = "<h4> " + _name + "<img class='user_tick' src='tick.png'></h4>";
                        messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebaseMessageId + " value = " + like + " onclick='UpdateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = nameWithTag + messageWithTag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                  }
            });
      });
}

getData();
console.log("kitter_page");

function UpdateLike(messageId)
{
      console.log("you clicked on the like button! - " + messageId);
      buttonId = messageId;
      likes = document.getElementById("button_id").value;
      updateLikes = Number(likes++);
      console.log("updatedLikes = " + updateLikes);
      firebase.database().ref("roomname").child("messageId").update( {like : updateLikes} );
}

function RoomnameLocationChange(name)
{
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "KitterPage.html";
}

function logout()
{
      console.log("Logged out!");
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}

var username = localStorage.getItem("username");
var roomname = localStorage.getItem("roomname");

function Send()
{
    message = document.getElementById("message").value;
    firebase.database().ref(roomname).push( { form : username, message : message, like : 0 } );
    console.log(message);
    document.getElementById("message").value = "";
}