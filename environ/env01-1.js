function Askpassword(whatPassword) {
    let userNumber = prompt("What do we call the Cheesemaster?");

    if (userNumber == whatPassword) {
        $("#output").html("Splendid!");
    }
    else {
        $("#output2").html("That's not quite right.");
    }
}

$("#Cheesetacular").click(function() {
    Askpassword("Cheesetacular");
});
