
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD7MastMJvlR2nMGQmPYB3WQNZ6GwlzWTw",
    authDomain: "kwitter-f04d6.firebaseapp.com",
    databaseURL: "https://kwitter-f04d6-default-rtdb.firebaseio.com",
    projectId: "kwitter-f04d6",
    storageBucket: "kwitter-f04d6.appspot.com",
    messagingSenderId: "1061127804210",
    appId: "1:1061127804210:web:280921d95bac10411ef32b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser(){
      user_name = document.getElementById("user_name").value;
      age = 12

      firebase.database().ref("/").child(user_name).update({
          purpose: "user added",
          userAge: age
      })
  }
