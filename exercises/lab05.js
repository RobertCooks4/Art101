function Asknumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("You got it!");
    }
    else {
        $("#output").html("Nooooope");
    }
}

$("#good-button").click(function() {
    Asknumber(7);
}); 