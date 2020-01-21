$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var beenEaten = $(this).data("beeneaten");

    var beenEatenState = {
      eaten: beenEaten
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: beenEatenState
    }).then(function() {
      console.log("changed eaten to", beenEaten);

      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");

      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
