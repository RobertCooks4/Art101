
let count=0;
$("#needy-button") .click( function() {
    count = count + 1;
    $("#needy-button") .html("You clicked me " + count + " times");
});
let objectname = "energy drink";
let objectcolor = "white";
let objectage = 10;
let isuseful = true;
let moods = ["tired", "excited", "confident", "angry"];
let energizedThing = {
    name: "Energy Drink",
    species: "Canned Beverage",
    age: 10,
    isDelicious: true
};