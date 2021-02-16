// string for storing the poetry
let poetryString = "";

/* 
event handler for clicks on word buttons
*/
function addWord(event) {
    // get the text on the button
    // innerHTML for " " is " ", innerText for " " is ""
    const wordToAdd = event.target.innerHTML;

    // add the text to the string
    poetryString += wordToAdd;
}

/* 
event handler for the button that prints the poetry
*/
function printPoetry() {
    // get the result div and set its innerHTML to the content of poetryString
    document.getElementById("result").innerHTML = poetryString;

    // empty the string in preparation for the next masterpiece ;)
    poetryString = "";
}

/* 
the rest of this script is for adding event listeners to all the word buttons
*/

// all the word buttons are children of the div with id words
let buttons = document.getElementById("words").children;

// just to show what buttons are (a HTMLCollection object)
console.log(buttons);

/* 
two different ways to loop through all the buttons
buttons is a HTMLCollection, that supports the for/of loop
https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements/22754453
*/
// for (let i = 0; i < buttons.length; i++) {
//     const button = buttons[i];
for (let button of buttons) {
    // add event listener to button
    button.addEventListener("click", addWord);
}
