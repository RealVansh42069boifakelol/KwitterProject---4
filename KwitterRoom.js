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
username = localStorage.getItem("username");

function AddRoomToDatabase()
{
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({purpose : "adding roomname"});
    localStorage.setItem("roomname", roomname);
    window.location = "KwitterPage.html";   
}