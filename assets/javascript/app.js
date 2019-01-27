console.log("connected!")

//giphy params = q, limit, rating
//create var array for strings under var topics
//list out work moods : what did you say, sleepy, tired, coffee, happy, waiting, not listening, 
//banging head against wall, breaking computer, laughing, pot lucks, weekend,
//use a loop that appends button to each  string in the array
//when user clicks button page loads 10 GIFS
//make them non-animated
//under each GIF .text rating provided by giphy
//display button presses
//use search field to input value that add to topics array
//make function call that takes each topic in the array and remakes the buttons on the page 

var topics = ["what did you say", "sleepy", "coffee", "happy", "waiting","tired", "not listening", "cheering", "high five", "banging head against wall", "breaking computer", "laughing", "pot lucks", "waiting for the weekend"];

var queryURL = "https://api.giphy.com/v1/gifs/" + topics[0] + "?api_key=9Q4mfcfRZTFzuU5a61bNWA0VWivOtBGr";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});


function showGIF() {
    var moods = $(this).attr("data-name");
console.log(moods);
  }

  // Function for displaying GIF data
  function renderButtons() {
    $("#buttons-view").empty();

    // Looping through the array of topics
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each mood in the array
      var b = $("<button>");
      // Adding a class of button-style to button
      b.addClass("button-style");
      // Adding a data-attribute
      b.attr("data-name", topics[i]);
      // Providing the initial button text
      b.text(topics[i]);
      // Adding the button to the HTML
      $("#buttons-view").append(b);
    }
  }

  // This function handles events where one button is clicked
  $("#add-mood").on("click", function(event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var mood = $("#mood-input").val().trim();
    moods.push(mood);

    renderButtons();

  });

  $(document).on("click", ".button-style", showGIF);

  renderButtons();

