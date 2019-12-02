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
document.getElementById("defaultOpen").click();

$(document).ready(function () {
  // Getting a reference to the input field where user adds a new user

  var $userContainer = $(".user-container");
  // Adding event listeners for deleting, editing, and adding users

  $(document).on("click", "button.complete", toggleComplete);

  // Our initial users array
  var users = [];

  // Getting users from database when page loads
  getUsers();

  // This function resets the users displayed with new users from the database
  function initializeRows() {
    $userContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < users.length; i++) {
      rowsToAdd.push(createNewRow(users[i]));
    }
    $userContainer.prepend(rowsToAdd);
  }

  // This function grabs users from the database and updates the view
  function getUsers() {
    $.get("/api/users", function (data) {
      users = data;
      initializeRows();
    });
  }

  $("#submit").on("click", function () {
    // save the character they typed into the character-search input
    var searchedCharacter = $("#filter")
      .val()
      .trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

    // run an AJAX GET-request for our servers api,
    // including the user's character in the url
    if (searchedCharacter.length < 1) {
      getUsers();
    } else {
      $.get("/api/users/category/" + searchedCharacter, function (data) {
        // log the data to our console
        users = data;
        initializeRows();
      });
    }
  });

  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var user = $(this).parent().data("user");
    user.complete = !user.complete;
    updateUser(user);
  }

  // This function updates a user in our database
  function updateUser(user) {
    $.ajax({
      method: "PUT",
      url: "/api/users",
      data: user
    }).then(getUsers);
  }

  // This function constructs a user-item row
  function createNewRow(user) {
    var $newInputRow = $(
      [
        "<li class='list-group-item'>",
        "<span>",
        user.name,
        "</span>",
        "<span>",
        user.category,
        "</span>",
        "<span class='user-item'>",
        user.item,
        "</span>",
        "<button class='complete btn btn-danger'>x</button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", user.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("user", user);
    if (user.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }
});