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
            item1: $("#item1").val(),
            item2: $("#item2").val(),
            category: $("#category").val(),
        };

        // AJAX post the data to the dogs API.
        $.post("/api/users", userData, function (data) {
           
        });
        
        $("#item1").val(""),
        $("#item2").val(""),
        $("#category").val(""),

        
        console.log(userData)
        
    }
});

