// Variables

userInput = document.getElementById("userInput");
inputBtn = document.getElementById("inputBtn");
output = document.getElementById("output");

// Work Area

function sendResult() {
    output.value = `&#x202e;-${cleanedInput}`;
}

// Event Listeners

inputBtn.addEventListener("click", cleanInput);
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      inputBtn.click();
    }
});

// Tools

function cleanInput() {
    input = userInput.value;
    cleanedInput = input
        .toUpperCase()
        .replaceAll("AA", "A`")
        .replaceAll("BB", "B`")
        .replaceAll("CC", "C`")
        .replaceAll("DD", "D`")
        .replaceAll("EE", "E`")
        .replaceAll("FF", "F`")
        .replaceAll("GG", "G`")
        .replaceAll("HH", "H`")
        .replaceAll("II", "I`")
        .replaceAll("JJ", "J`")
        .replaceAll("KK", "K`")
        .replaceAll("LL", "L`")
        .replaceAll("MM", "M`")
        .replaceAll("NN", "N`")
        .replaceAll("OO", "O`")
        .replaceAll("PP", "P`")
        .replaceAll("QQ", "Q`")
        .replaceAll("RR", "R`")
        .replaceAll("SS", "S`")
        .replaceAll("TT", "T`")
        .replaceAll("UU", "U`")
        .replaceAll("VV", "V`")
        .replaceAll("WW", "W`")
        .replaceAll("XX", "X`")
        .replaceAll("YY", "Y`")
        .replaceAll("ZZ", "Z`");
        sendResult();
}

// Testing Purposes

