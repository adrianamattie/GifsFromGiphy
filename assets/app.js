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
        event.preventDefault();
        buttonName = $("#country-input").val().trim();
        console.log(buttonName);
         addButtons();
    });

});