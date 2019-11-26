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
  

  

  $(document).ready(function() {
    // Getting a reference to the input field where user adds a new user
    var $newItemInput = $("input.new-item");
    // Our new users will go inside the userContainer
    var $userContainer = $(".user-container");
    // Adding event listeners for deleting, editing, and adding users
    $(document).on("click", "button.delete", deleteUser);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".user-item", editUser);
    // $(document).on("click", ".user-item", editUserName);
    // $(document).on("click", ".user-item", editUserItem);
    // $(document).on("click", ".user-item", editUserCategory);
    $(document).on("keyup", ".user-item", finishEdit);
    // $(document).on("keyup", ".user-item", finishEditName);
    // $(document).on("keyup", ".user-item", finishEditItem);
    // $(document).on("keyup", ".user-item", finishEditCategory);
    $(document).on("blur", ".user-item", cancelEdit);
    // $(document).on("blur", ".user-item", cancelEditName);
    // $(document).on("blur", ".user-item", cancelEditItem);
    // $(document).on("blur", ".user-item", cancelEditCategory);
    $(document).on("submit", "#user-form", insertUser);

  
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
      $.get("/api/users", function(data) {
        users = data;
        initializeRows();
      });
    }

    $("#submit").on("click", function() {
      // save the character they typed into the character-search input
      var searchedCharacter = $("#filter")
        .val()
        .trim();
    
      // Using a RegEx Pattern to remove spaces from searchedCharacter
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();
    
      // run an AJAX GET-request for our servers api,
      // including the user's character in the url
      if (searchedCharacter.length<1){
        getUsers();
      } else{
        $.get("/api/users/category/"+searchedCharacter, function(data) {
          // log the data to our console
          users = data;
        initializeRows();
        });
      }
    });
  
    // This function deletes a user when the user clicks the delete button
    function deleteUser(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/users/" + id
      }).then(getUsers);
    }
  
    // This function handles showing the input box for a user to edit a user

    function editUser() {
        var currentUser = $(this).data("user");
        console.log(currentUser)
        $(this).children().hide();
        $(this).children("input.edit").val(currentUser);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
      }

    function editUserName() {
      var currentUserName = $(this).data("user").name;
      console.log(currentUserName)
      $(this).children().hide();
      $(this).children("input.edit").val(currentUserName);
      $(this).children("input.edit").show();
      $(this).children("input.edit").focus();
    }

    function editUserItem() {
        var currentUserItem = $(this).data("user").item;
        console.log(currentUserItem)
        $(this).children().hide();
        $(this).children("input.edit").val(currentUserItem);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
      }

      function editUserCategory() {
        var currentUserCategory = $(this).data("user").category;
        console.log(currentUserCategory)
        $(this).children().hide();
        $(this).children("input.edit").val(currentUserCategory);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
      }
  
    // Toggles complete status
    function toggleComplete(event) {
      event.stopPropagation();
      var user = $(this).parent().data("user");
      user.complete = !user.complete;
      updateUser(user);
    }
  
    // This function starts updating a user in the database if a user hits the "Enter Key"
    // While in edit mode

    function finishEdit(event) {
        var updatedUser = $(this).data("user");
        if (event.which === 13) {
          updatedUser = $(this).children("input").val().trim();
          $(this).blur();
          updateUser(updatedUser);
        }
      }

    function finishEditName(event) {
      var updatedUserName = $(this).data("user").name;
      if (event.which === 13) {
        updatedUserName = $(this).children("input").val().trim();
        $(this).blur();
        updateUser(updatedUserName);
      }
    }

    function finishEditItem(event) {
        var updatedUserItem = $(this).data("user").item;
        if (event.which === 13) {
          updatedUserItem = $(this).children("input").val().trim();
          $(this).blur();
          updateUser(updatedUserItem);
        }
      }

      function finishEditCategory(event) {
        var updatedUserCategory = $(this).data("user").category;
        if (event.which === 13) {
          updatedUserCategory = $(this).children("input").val().trim();
          $(this).blur();
          updateUser(updatedUserCategory);
        }
      }
  
    // This function updates a user in our database
    function updateUser(user) {
      $.ajax({
        method: "PUT",
        url: "/api/users",
        data: user
      }).then(getUsers);
    }
  
    // This function is called whenever a user item is in edit mode and loses focus
    // This cancels any edits being made

    function cancelEdit() {
        var currentUser = $(this).data("user");
        if (currentUser) {
          $(this).children().hide();
          $(this).children("input.edit").val(currentUser);
          $(this).children("span").show();
          $(this).children("button").show();
        }
      }


    // function cancelEditName() {
    //   var currentUserName = $(this).data("user").name;
    //   if (currentUserName) {
    //     $(this).children().hide();
    //     $(this).children("input.edit").val(currentUserName);
    //     $(this).children("span").show();
    //     $(this).children("button").show();
    //   }
    // }

    // function cancelEditItem() {
    //     var currentUserItem = $(this).data("user").item;
    //     if (currentUserItem) {
    //       $(this).children().hide();
    //       $(this).children("input.edit").val(currentUserItem);
    //       $(this).children("span").show();
    //       $(this).children("button").show();
    //     }
    //   }

    //   function cancelEditCategory() {
    //     var currentUserCategory = $(this).data("user").category;
    //     if (currentUserCategory) {
    //       $(this).children().hide();
    //       $(this).children("input.edit").val(currentUserCategory);
    //       $(this).children("span").show();
    //       $(this).children("button").show();
    //     }
    //   }
  
    // This function constructs a user-item row
    function createNewRow(user) {
      var $newInputRow = $(
        [
          "<li class='list-group-item user-item'>",
          "<span>",
          user.name,
          "</span>",
          "<span>",
          user.category,
          "</span>",
          "<span>",
          user.item,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-danger'>x</button>",
          "<button class='complete btn btn-primary'>✓</button>",
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
  
    // This function inserts a new user into our database and then updates the view
    function insertUser(event) {
      event.preventDefault();
      var user = {
        name: $("#name").val(),
        category: $("#category").val(),
        item: $("#item").val(),
        complete: false
      };
  
      $.post("/api/users", user, getUsers);
      $newItemInput.val("");
    }
  });
  