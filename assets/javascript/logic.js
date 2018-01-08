$(document).ready(function() {

  // Function to animate the train in header
  var width = "+=" + $(document).width();
  $("#train-image").animate({
  left: width
  }, 9000, function() {
    // Animation complete.
  });

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD61w75ANj6YL53qV6gpmSWULGzZRIJcw0",
    authDomain: "trainscheduler-19de8.firebaseapp.com",
    databaseURL: "https://trainscheduler-19de8.firebaseio.com",
    projectId: "trainscheduler-19de8",
    storageBucket: "",
    messagingSenderId: "250813293856"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  // At the initial load and subsequent value changes, get a snapshot of the stored data.
  // This function allows you to update your page in real-time when the firebase database changes.
  database.ref().on("value", function(snapshot) {

    // Set the variables equal to the stored values.
    var trainName = snapshot.val().trainName;
    var trainDestination = snapshot.val().trainDestination;
    var firstTrainTime = snapshot.val().firstTrainTime;
    var frequency = snapshot.val().frequency;

    // Change the table rows inside the train schedule to reflect the stored values


  // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


});
