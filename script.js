know = {
    "Hello": "Hi there!",
    "how are you": "I am good",
};

function talk() {
    var input = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("userBox").innerHTML += input + "<br>";

    if (input in know) {
        document.getElementById("chatLog").innerHTML += know[input] + "<br>";
      }
      else {
        document.getElementById("chatLog").innerHTML += "Sorry that I don't understand. Please contact youremail@gmail.com to learn more about him. <br>";
      }
}
      