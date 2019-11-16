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
        ajaxCall()
    }
});
function ajaxCall (){
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
		"x-rapidapi-key": "9728d91c67msh6eed533c1ad16bap127f72jsne2c44476bd32",
		"accept": "application/hal+json"
	}
}

$.ajax(settings).done(function (response) {
    $("#quote").text(response.value);
	console.log(response.value);
});
}

