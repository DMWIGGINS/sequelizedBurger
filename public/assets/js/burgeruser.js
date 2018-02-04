$(function () {
            $(".create-form").on("submit", function (event) {
                // Make sure to preventDefault on a submit event.
                event.preventDefault();
                console.log("it clicked");
                var formatName = $("#yum").val().trim();
                var name = formatName.toUpperCase();
                var newBurger = {
                    name: name
                };

                // Send the POST request.
                $.ajax("/api/burgers", {
                    type: "POST",
                    data: newBurger
                }).then(
                    function () {
                        console.log("created new burger");
                        // Reload the page to get the updated list
                        location.reload();
                    }
                );
            });

                $(".eatBurger").on("click", function (event) {
                    var id = $(this).data("id");
                    var newMeal = $(this).data("newmeal");


                    var newMealState = {
                        devoured: true
                    };

                    // Send the PUT request.
                    $.ajax("/api/burgers/" + id, {
                        type: "PUT",
                        data: newMealState
                    }).then(
                        function () {
                            console.log("You Ate It!");
                            // Reload the page to get the updated list
                            location.reload();
                        }
                    );
                });
            });