$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD61w75ANj6YL53qV6gpmSWULGzZRIJcw0",
    authDomain: "trainscheduler-19de8.firebaseapp.com",
    databaseURL: "https://trainscheduler-19de8.firebaseio.com",
    projectId: "trainscheduler-19de8",
    storageBucket: "trainscheduler-19de8.appspot.com",
    messagingSenderId: "250813293856"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  $("#submit-button").on("click", function(event) {
         // Prevent the page from refreshing
         event.preventDefault();

         // Get inputs-
         var trainName = $("#train-name").val().trim();
         var trainDestination = $("#train-destination").val().trim();
         var firstTrainTime = $("#first-train-time").val().trim();
         var frequency = $("#frequency").val().trim();

         // Change what is saved in firebase
         database.ref().push({
           trainName: trainName,
           trainDestination: trainDestination,
           firstTrainTime: firstTrainTime,
           frequency: frequency,
           dateAdded: firebase.database.ServerValue.TIMESTAMP
         });
         // form.empty();
       });


   // Firebase watcher + initial loader
   database.ref().on("child_added", function(childSnapshot) {

     // Log everything that's coming out of snapshot
     console.log(childSnapshot.val().trainName);
     console.log(childSnapshot.val().trainDestination);
     console.log(childSnapshot.val().firstTrainTime);
     console.log(childSnapshot.val().frequency);

     // Formula to get next arrival time based on firstTrainTime, frequency and current time


     // Formula to get next arrival time based on firstTrainTime, frequency and current time
     // var minutesAway =

     // Change the table rows inside the train schedule to reflect the stored values
     $("#train-table").append("<div class='row train-schedule'>").append("<div class='col-md-3 train-name'>" + childSnapshot.val().trainName + "</div><div class='col-md-2 destination'>" + childSnapshot.val().trainDestination +
     "</div><div class='col-md-2 frequency'>" + childSnapshot.val().frequency + "</div></div></li>");

   // Handle the errors
   }, function(errorObject) {
     console.log("Errors handled: " + errorObject.code);
   });




});
