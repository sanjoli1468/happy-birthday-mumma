function addUser(){
    birthday = document.getElementById("username").value;  
   localStorage.setItem("birthday", birthday);
    window.location = "HBMpage.html";
       }
       var x= document.getElementById("myAudio");

       function playSound(){
           x.play();
           console.log("play");
       }