var firebaseConfig = {
    apiKey: "AIzaSyAJEub_xpRNwSpgmhuCmsaGbm6Zjo_CAOw",
    authDomain: "potluck-chat.firebaseapp.com",
    databaseURL: "https://potluck-chat.firebaseio.com",
    projectId: "potluck-chat",
    storageBucket: "potluck-chat.appspot.com",
    messagingSenderId: "511761764742",
    appId: "1:511761764742:web:f3abc118fed1c7a9afdc07",
    measurementId: "G-P9NWJPXJD3"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  var chatData = database.ref("/chatBox");
  $("#chat-send").on("click", function () {
    if ($("#chat-input").val() !== "") {
      chat();
    }
  });

  // If user clicks "enter":
  $("#chat-input").on("keypress", function (e) {
    if (e.which === 13 && $("#chat-input").val() !== "") {
      chat();
    }
  });

  // Update the chat on the screen:
  chatData.orderByChild("time").on("child_added", function (snapshot) {
    $("#chat-messages").append(
      $("<p>").addClass("player-" + snapshot.val().idNum),
      $("<span>").text(snapshot.val().name + ":" + snapshot.val().message)
    );

    // Shows most recent message:
    $("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight);
  });
  var chatDataDisc = database.ref("/chatBox/" + Date.now());
//   chatDataDisc.onDisconnect().set({
//     name: name,
//     time: firebase.database.ServerValue.TIMESTAMP,
//     message: "has disconnected.",
//     idNum: 0
//   });

  function chat() {
    var message = $("#chat-input").val();
    chatData.push({
      name: name,
      message: message,
      time: firebase.database.ServerValue.TIMESTAMP,
      
    });
    $("#chat-input").val("");
  }

$("#submit").on("click", function (event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
        var isValid = true;
        $(".required").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
        // Create an object for the user's data
        var userData = {
            name: $("#name").val(),
            item: $("#item").val(),
            category: $("#category").val(),
        };
        $("#food-name").text(userData.name)
        $("#food-item").text(userData.item)
        $("#food-category").text(userData.category)

        // AJAX post the data to the user API.
        $.post("/api/users", userData, function (data) {
           window.location.href = "/display";
        });
        
        $("#name").val(""),
        $("#item").val(""),
        $("#category").val(""),

        
        console.log(userData)
        ajaxCall()
    }
});
function openList(evt, listName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(listName).style.display = "block";
    evt.currentTarget.className += " active";
  }

function ajaxCall (){
    var queryURL = "https://www.themealdb.com/api/json/v2/9973533/randomselection.php"
      ;
    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API
      .then(function (response) {
          console.log(response.meals[0].strYoutube)
          var str = response.meals[0].strYoutube;
          var res = str.replace("watch?v=", "embed/")
          console.log(res)
          $("#youtube").attr("data", res) 

      })
    

	
}

