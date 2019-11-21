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
           
        });
        
        $("#name").val(""),
        $("#item").val(""),
        $("#category").val(""),

        
        console.log(userData)
        ajaxCall()
    }
});
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

