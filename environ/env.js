
let count=0;
$("#cheese-button") .click( function() {
    count = count + 1;
    $("#cheese-button") .html("You Collected " + count + " cheese!");
    
}); 