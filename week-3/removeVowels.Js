/*
function removeVowels(text){
    let newString = "";

    for (let count = 0; count <= text.length - 1; count++){
        if (text[count] != "a" && text[count] != "e" && text[count] != "i" && 
        text[count] != "o" && text[count] != "u" ){
        newString += text[count];
    }
}
    console.log(newString);
}

removeVowels("I have never seen a thin person drinking Diet coke.");
*/

/*
function charCount(text){
    let newString = 0;

    for (let count =0 count <= text.length -1; count++){
        if (text[count]) != "a" && text[count] != "e" && text[count] != "i" && 
        text[count] != "o" && text[count] != "u" ){
        newString += text[count];
        }
    }
    return(newString)
}

*/
/*
function charCount(character, string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
}


let result = charCount('a', 'banana');
//let result = charCount('a', 'Landed');
//let result = charCount('b', 'big fat bubble');
console.log(result);
*/
/*
function charCount (character, string){
    let numberOfTimes = 0;
    for (let count = 0; count <= string.length - 1; count++){
        if (string[count] === character){
            numberOfTimes = numberOfTimes + 1;
        }
    }
    console.log(numberOfTimes);


charCount("b", "big fat bubble");
}*/

function doubleChar (text){
let newText = "";

for (let count = 0; count <= text.length - 1; count++){
    newText = newText + text[count];
    newText = newText + text[count];
    }
    console.log(newText);
  }
  doubleChar("This is a boy");




