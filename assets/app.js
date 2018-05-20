$(document).ready(function () {

    console.log("hello");

    var topics = ["Australia", "England", "Canada", "Scotland", "Ireland",
        "Israel", "Sydney", "Toronto",
    ];

    var newCountries;
    var buttonName = "";

    function showButtons() {
        $("#countryButtons").empty();
        for (i = 0; i < topics.length; i++) {
            var buttons = $("<button>");
            buttons.addClass("addOnClick");
            buttons.attr("data-name", topics[i]);
            buttons.attr("class", "btn btn-primary");
            buttons.text(topics[i]);
            $("#countryButtons").append(buttons);
        }
    }
    showButtons()



    function addButtons() {
        var buttons = $("<button>");
        buttons.addClass("addOnClick");
        buttons.attr("data-name", buttonName);
        buttons.attr("class", "btn btn-primary");
        buttons.attr("id", "newBtn");
        buttons.text(buttonName)
        $("#countryButtons").append(buttons);
    }



    $("#addBtn").click(function () {
        if (buttonName == "") {
            break;
            console.log("Nothing was entered")
        } else {
            event.preventDefault();
            buttonName = $("#country-input").val().trim();
            console.log(buttonName);
            addButtons();
        }
    });



});

function showGifs() {

    var country = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=20";
    // saying grab 20 gifs
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var countryImage = $("<img>");
                countryImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(countryImage);

                $("#gifs-appear-here").prepend(gifDiv);
                console.log(results[i].images.fixed_height.url);
            }
        });
};

  $("button").on("click", function () {
       event.preventDefault();
      alert("Hello");
   showGifs();
  });

