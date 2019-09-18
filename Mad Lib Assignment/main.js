document.getElementById("generate_madlib").addEventListener('click', generateMB);

function generateMB() {
    //Assigning variables
    let verbWord = document.getElementById("verb").value;
    let pluralNounWord = document.getElementById("plural_noun").value;
    let adjectiveWord = document.getElementById("adjective").value;
    let presentVerbWord = document.getElementById("present_verb").value;
    let nounWord = document.getElementById("noun").value;


    //result variable
    let result = "There are too many " + verbWord + " " + pluralNounWord + " " + "on this" + " " + adjectiveWord + " airplane. Somebody has to "  + presentVerbWord + " on the " + nounWord + " to solve this problem.";
 
    //Printing it out
    console.log( verbWord + " " + pluralNounWord + " " + adjectiveWord + " " + presentVerbWord + " " + nounWord);
    document.getElementById("madlib_result").innerHTML = result;
}