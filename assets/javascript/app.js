$(document).ready(function() {

var displayedButtons = ["Naruto", "Sasuke", "Kakashi"];

function displayImg(){
    $("display-images").empty();
    var input = $(this).attr("data-name");
    var limit = 10;
    var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=J6LoY96gEICI3KAnOxmy19HJGwWNQ6tm";
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {

    for(var i = 0; i<limit; i++) {

        var displayDiv = $("<div>");
        displayDiv.addClass("holder");

        var image = $("<img>");
        image.attr("src", response.data[i].images.original_still.url);
    }
}


}


}