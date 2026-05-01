let environmentTitle = "The Maze of Cheese";

let environmentElements = ["rats", "cheese", "eggs", "death"]

let count=0;
$("#cheese-button") .click( function() {
    count = count + 1;
    $("#cheese-button") .html("You Collected " + count + " cheese!");
    message = message + "<p>Great! Now bring that cheese to Swiss Steve!</p>";
    $("#output").html(message);
});

