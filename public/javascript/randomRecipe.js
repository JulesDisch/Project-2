$(document).ready(function () {


    var recipeCategory = "";
    var recipesArray = [];

    function getMealID() {

        var queryURL = "https://www.themealdb.com/api/json/v2/9973533/filter.php?c=" + recipeCategory;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.meals;

            for (var i = 0; i < results.length; i++) { //to get the meal Names 
                var mealID = results[i].idMeal;
                displayFullInfo(mealID);
            }

        });
    }

    function displayFullInfo(mealID) {

        var queryURL = "https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=" + mealID;


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(queryURL);
            console.log(response.meals);

            var results = response.meals;

            for (var i = 0; i < results.length; i++) {

                //stores ingredients into an array
                var ingredients = [results[i].strIngredient1, results[i].strIngredient2, results[i].strIngredient3, results[i].strIngredient4, results[i].strIngredient5, results[i].strIngredient6, results[i].strIngredient7, results[i].strIngredient8, results[i].strIngredient9, results[i].strIngredient10, results[i].strIngredient11, results[i].strIngredient12, results[i].strIngredient13, results[i].strIngredient14, results[i].strIngredient15, results[i].strIngredient16, results[i].strIngredient17, results[i].strIngredient18, results[i].strIngredient19, results[i].strIngredient20]

                //stores measurements into an array
                var measurements = [results[i].strMeasure1, results[i].strMeasure2, results[i].strMeasure3, results[i].strMeasure4, results[i].strMeasure5, results[i].strMeasure6, results[i].strMeasure7, results[i].strMeasure8, results[i].strMeasure9, results[i].strMeasure10, results[i].strMeasure11, results[i].strMeasure12, results[i].strMeasure13, results[i].strMeasure14, results[i].strMeasure15, results[i].strMeasure16, results[i].strMeasure17, results[i].strMeasure18, results[i].strMeasure19, results[i].strMeasure20]

                //filters the ingredients array of nulls and undefineds
                var newIngredientsArray = ingredients.filter(function (element) {
                    return element != null && element != "" && element != 0 && element != NaN && element != undefined && element != false;
                });

                //filters the measurements array of nulls and undefineds
                var newMeasurementsArray = measurements.filter(function (element) {
                    return element != null && element != "" && element != 0 && element != NaN && element != undefined && element != false;
                });

                //this array combines both the measurements array and the ingredients array based on their indexes
                var newArray = newMeasurementsArray.map((e, i) => e + " " + newIngredientsArray[i]);

                //creates a new paragraph to store everything into at the end
                var measuredIngredientsDisplay = $("<p>");

                //this loops through the new array and stores each combinaation in their own div which is appended to the paragraph
                for (var x = 0; x < newArray.length; x++) {
                    var newDiv = $("<div>");
                    newDiv.text(newArray[x]);
                    measuredIngredientsDisplay.append(newDiv);
                }
                var categoryName = recipeCategory;
                
                //to get the meal Names 
                var mealName = results[i].strMeal;
                var nameDisplay = $("<h4>").text(mealName + " [" + categoryName + "]");

                //to get instructions
                var mealInstuctions = results[i].strInstructions;
                var instructionsDisplay = $("<p>").text(mealInstuctions);

                //to get the jpgs
                var pixDisplay = $("<img>");
                pixDisplay.attr("src", results[i].strMealThumb);
                pixDisplay.attr("class", "mealGif");
                pixDisplay.attr("id", "foodPix");

                //to create titles
                var ingredientTitle = $("<h5>").text("Ingredients");
                var instructionsTitle = $("<h5>").text("Instructions");


                //create a new div to hold all the stuff above
                var bigDiv = $("<div>");
                bigDiv.append(nameDisplay, ingredientTitle, measuredIngredientsDisplay, instructionsTitle, instructionsDisplay, pixDisplay);

                recipesArray.push(bigDiv); //create a meals array


                // //append the div to the well
                // $("#meals-display").prepend(recipesArray);

            }

            displayMeal();

        });

    }

    function displayMeal() {

        var randomMeal = recipesArray[Math.floor(Math.random() * recipesArray.length)];
        $("#meals-display").html(randomMeal);

    }

    $("#categorySubmit").on("click", function (event) {
        event.preventDefault();

        recipesArray = [];
        var rCategory = $("#dropDown").val(); //determined by category selected

        console.log("You selected " + rCategory)

        //to validate whether a drop down selection was made for the food category
        function validateForm() {
            var isValid = true;

            $(".chosen-select").each(function () {
                //if a drop down selection was not made for the food category
                if ($(this).val() === "") {
                    isValid = false;
                    $("#errorMessage").text("Please select a category") //provide an error message if no selection is made
                }
            });
            return isValid;
            isValid = false; //resets the value to false for future validations
        }

        //if a drop down selection was made for the food category
        if (validateForm()) {
            $("#errorMessage").text("") //clear the error message if a selectio is made 
            switch (rCategory) {

                case "starter":
                    recipeCategory = "starter";
                    break;

                case "dessert":
                    recipeCategory = "dessert";
                    break;

                case "chicken":
                    recipeCategory = "chicken";
                    break;

                case "beef":
                    recipeCategory = "beef";
                    break;

                case "pork":
                    recipeCategory = "pork";
                    break;

                case "seafood":
                    recipeCategory = "seafood";
                    break;
            };
        }
        getMealID();

        $("#recipeIngredientInput").val(""); //clears the search term field when its button is created
    });

});
