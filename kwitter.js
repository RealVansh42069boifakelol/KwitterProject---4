function Login()
{
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "KwitterRoom.html";
}