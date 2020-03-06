$(document).ready(function() {
  var displayedButtons = ["Naruto", "Sasuke", "Kakashi"];

  function displayImg() {
    $("display-images").empty();
    var input = $(this).attr("data-name");
    var limit = 10;
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      input +
      "&limit=" +
      limit +
      "&api_key=J6LoY96gEICI3KAnOxmy19HJGwWNQ6tm";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      for (var i = 0; i < limit; i++) {
        var displayDiv = $("<div>");
        displayDiv.addClass("holder");

        var image = $("<img>");
        image.attr("src", response.data[i].images.original_still.url);
        image.attr("data-still", response.data[i].images.original_still.url);
        image.attr("data-animate", response.data[i].images.original.url);
        image.attr("data-state", "still");
        image.attr("class", "gif");
        displayDiv.append(image);

        var rating = response.data[i].rating;
        console.log(response);
        var pRating = $("<p>").text("Rating: " + rating);
        displayDiv.append(pRating);

        $("display-images").append(displayDiv);
      }
    });
  }

  function renderButtons(){
      $("#display-buttons").empty();

      for (var j = 0; j< displayedButtons.length; j++){
          var newButton = $("<button>")
          newButton.attr("class", "btn btn-default");
          newButton.attr("id", "input")
          newButton.attr("data-name", displayedButtons[j]);
          newButton.text(displayedButtons[j]);
          $("#display-buttons").append(newButton);
      }
  }

  
});
