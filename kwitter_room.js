var firebaseConfig = {
      apiKey: "AIzaSyDAeWnP6rVcu9qA7xWiqnGCAgmkgi3K2F0",
      authDomain: "practice-5e3e9.firebaseapp.com",
      databaseURL: "https://practice-5e3e9-default-rtdb.firebaseio.com",
      projectId: "practice-5e3e9",
      storageBucket: "practice-5e3e9.appspot.com",
      messagingSenderId: "1035619626802",
      appId: "1:1035619626802:web:0b582735a07066619fb12b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE

 username=localStorage.getItem("user=");

 document.getElementById("user").innerHTML="Welcome "+username+"!";

function addroom(){
      roomname=document.getElementById("addroom").value;
      firebase.database().ref("/").child(roomname).update({purpose:"adding room names"});
      localStorage.setItem("roomname",roomname);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirect_to_roomname(this.id)'>#"+Room_names+"</div> <hr>"
    document.getElementById("output").innerHTML+=row;

//End code
      });});}


getData();

function redirect_to_roomname(name){
console.log(name);
localStorage.setItem(" room name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("uer=");
      localStorage.removeItem("roomname");
      window.location="index.html";
}