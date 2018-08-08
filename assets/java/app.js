// Create html placeholders for what needs to be displayed
// Point to correct file for js
// Point ot correct jQuery
// Start with creating global vars
// Create array of initial gif categories
// Get API Key for Gihpy Developers 6rNrOGrkh1s9XhzTNEHgLs2QLjeOVX26
// Create functions needed
// Function to display in HTML
//  Within functions create local vars
//  Display what needs to happen within the function
//  Create ajax to display gifs depending on button
//  Create a function to display gifs after button is clicked


// Start with creating global vars
var stillImage;
var anminateImage; //change

// Create array of initial gif categories

var initialArray = ["Cats", "ERMAGHERD", "Stranger Things", "Chuck Norris", "Triumph", "The Most Interesting Man Alive", "Willy Wonka", "Brace Youselves" , "Drunk Baby"];//CHange

// console.log(initialArray);

// Function to display in HTML

function displayGIF(){

    var apiKey = "6rNrOGrkh1s9XhzTNEHgLs2QLjeOVX26";
    var newGif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newGif + "&api_key=" + apiKey + "&fmt=json&limit=10";

    console.log(queryURL); //delete me
//  Create ajax to display gifs depending on button

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    console.log(response);



var results = response.data;

for (var i = 0; i < results.length; i++) {

    //div to hold gifs when shown
    var showDiv = $("<div class='newGif d-inline-block'>"); //Change

    // div to hold gif content
    var imageDiv = $("<div class='newGif text-center mt-2 mr-2'>"); //Change

    // Still image URL
    stillImage = results[i].images.fixed_height_still.url;

    // Animate image URL
    animateImage = results[i].images.fixed_height.url;

    // Hold all image URLs
    holdAllImages = $("<img>").addClass("gif").attr("src", stillImage).attr("data-state", "still").attr("data-still", stillImage).attr("data-animated", animateImage);

    // Displaying the still image URL
    imageDiv.append(holdAllImages);

    // Adding gifs to show
    $(showDiv).prepend(imageDiv);

    // Prepending the new gifs selected above others
    $("#gifArea").prepend(showDiv);

}


    $(showDiv).prepend(imageDiv);
    });
}

//  Create a function to display gifs after button is clicked
    function renderButtons() {

        // Error handle for repeat buttons clicks
        $("#gifContainer").empty();

        // For loop to look at the array of gifs
        for (var i = 0; i < initialArray.length; i++) {

        // Add new buttons to the array
          var addNew = $("<button>");
          // Add a class for the gif button
          addNew.addClass("gif-btn btn btn-outline-light mr-2 mb-2");
          // Add a data-attribute
          addNew.attr("data-name", initialArray[i]);
          // Add text to initial buttons
          addNew.text(initialArray[i]);
          // Adding the button to the buttons-view div
          $("#gifContainer").append(addNew);

          console.log(initialArray);
        }
    }

        // This function handles events where a show button is clicked
        $("#searchButton").on("click", function(event) {
            
        event.preventDefault();

        // Grab input from text box
        var gifDisplay = $("#searchBar").val().trim();

        // Adding new gif to array
        initialArray.push(gifDisplay);

        // Call renderButtons
        renderButtons();
        });

     // Adding a click event listener to all elements with a class of "movie-btn"
     $(document).on("click", ".gif-btn", displayGIF);

     // Calling the renderButtons function to display the intial buttons
     renderButtons();

//on click, change between still and animated images
$(document).on("click", ".gif", function(){ 

    console.log(".gif clicked");
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    console.log("current data-state: " + state);
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animated"));
      console.log("updated data-state: animated"); //Delete
      $(this).attr("data-state", "animated");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      console.log("updated data-state = animated"); //Delete
      $(this).attr("data-state", "still");
    }
});
  