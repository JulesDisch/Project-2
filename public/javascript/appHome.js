$("#submit").on("click", function (event) {
  event.preventDefault();
  function validateForm() {
    var isValid = true;
    $(".required").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  if (validateForm()) {
    var userData = {
      name: $("#name").val(),
      item: $("#item").val(),
      category: $("#category").val(),
    };

    $.post("/api/users", userData, function (data) {
      window.location.href = "/display";
    });
    console.log(userData)
  } else {
    fillRequiredModal();
  }
});

function fillRequiredModal() {
  var reqModal = document.getElementById("fillRequired");
  var okBtn = document.getElementById("ok");
  var span = document.getElementsByClassName("close")[0];
  reqModal.style.display = "block";
  okBtn.onclick = function () {
    reqModal.style.display = "none";
  }

  span.onclick = function () {
    reqModal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == reqModal) {
      reqModal.style.display = "none";
    }
  }
}