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
//YOUR FIREBASE LINKS

username=localStorage.getItem("user=");
roomname=localStorage.getItem("roomname");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomname).push({name:username,message:msg,like:0});
    document.getElementById("msg").value="";

}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name_user=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name_user+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_buttn="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> LIKE:"+like+"</span> </button> <hr>"
row=name_with_tag+message_with_tag+like_buttn+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("uer=");
    localStorage.removeItem("roomname");
    window.location="index.html";
}

function update_like(message_id){
    console.log(message_id);

    btn_id=message_id;
    likes=document.getElementById(btn_id).value;

    updated_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(roomname).child(message_id).update({like:updated_likes});
}
