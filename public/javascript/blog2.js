$(document).ready(function () {
    /* global moment */
  
    // blogContainer holds all of our posts
    var blogContainer = $(".blog-container");
    var postCategorySelect = $("#category"); //From CRUD ?????
  
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    postCategorySelect.on("change", handleCategoryChange); //From CRUD
  
    // Variable to hold our posts
    var posts;
  
    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var authorId;
    var authorId2;//created to keep the authorID its original value
    if (url.indexOf("?author_id=") !== -1) {
      authorId = url.split("=")[1];
      getPosts(authorId);
    }
    // If there's no authorId we just get all posts as usual
    else {
      getPosts();
    }
  
  
    // This function grabs posts from the database and updates the view
    function getPosts(author) {
      authorId2 = author || "";
      if (authorId2) {
        authorId2 = "/?author_id=" + authorId;
      }
      $.get("/api/posts" + authorId2, function (data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty(author);
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function grabs posts from the database and updates the view 
    // From CRUD
    function getPosts2(category) {
      var categoryString = category || "";
      if (categoryString) {
        categoryString = "/category/" + categoryString;
      }
      $.get("/api/posts" + categoryString, function (data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty2();
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete posts
    function deletePost(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/posts/" + id
      })
        .then(function () {
          getPosts(postCategorySelect.val());
        });
    }
  
    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
      blogContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
      }
      blogContainer.append(postsToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(post) {
      var formattedDate = new Date(post.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      var newPostCard = $("<div>");
      newPostCard.addClass("card");
      var newPostCardHeading = $("<div>");
      newPostCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-info");
      var newPostTitle = $("<h2>");
      var newPostDate = $("<small>");
      var newPostAuthor = $("<h5>");
      newPostAuthor.text("Written by: " + post.Author.name);
      newPostAuthor.css({
        padding: "10px",
        float: "left",
        color: "blue",
        "margin-top":
          "-10px"
      });
      var newPostCategory = $("<h5>");//From CRUD
      newPostCategory.text("Category: " + post.category);//From CRUD
      newPostCategory.css({//From CRUD
        padding: "10px",
        float: "right",
        color: "green",
        "font-weight": "700",
        "margin-top":
          "-15px"
      });
      var newPostCardBody = $("<div>");
      newPostCardBody.addClass("card-body");
      var newPostBody = $("<p>");
      newPostTitle.text(post.title + " ");
      newPostBody.text(post.body);
      newPostDate.text(formattedDate);
      newPostTitle.append(newPostDate);
      newPostCardHeading.append(deleteBtn);
      newPostCardHeading.append(editBtn);
      newPostCardHeading.append(newPostTitle);
      newPostCardHeading.append(newPostCategory);//From CRUD
      newPostCardBody.append(newPostBody);
      newPostCardHeading.append(newPostAuthor);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      if (post.Author.id != authorId) {///filter out only the selected author's posts
        newPostCardBody.hide();
        newPostCardHeading.hide();
        newPostCard.hide();
      }
      newPostCard.data("post", post);
      // console.log("The post.Author.id is " + post.Author.id)
      // console.log("The authorId is " + authorId)
      return newPostCard;
    }
  
    // This function figures out which post we want to delete and then calls deletePost
    function handlePostDelete() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");
      deletePost(currentPost.id);
      window.location.reload(true); //page has to reload in order to show the data without the removed post
      window.location.href = "/blog2?author_id=" + authorData.id; //displays all the author's remaining posts after the post's removal
    }
  
    // This function figures out which post we want to edit and takes it to the appropriate url
    function handlePostEdit() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");
      window.location.href = "/cms?post_id=" + currentPost.id;
    }
  
    // This function displays a message when there are no posts
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Author #" + id;
      }
      blogContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
        "'>here</a> in order to get started.");
      blogContainer.append(messageH2);
    }
  
    // This function displays a message when there are no posts for a category
    function displayEmpty2() {
      blogContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
      blogContainer.append(messageH2);
    }
  
    function handleCategoryChange() { //From CRUD
      var newPostCategory = $(this).val();
      getPosts2(newPostCategory);
    }
  });