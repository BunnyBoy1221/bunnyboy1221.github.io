// Variables

userInput = document.getElementById("userInput");
inputBtn = document.getElementById("inputBtn");
output = document.getElementById("output");

// Work Area

function sendResult() {
    output.innerHTML = "&#x202e;" + cleanedInput + "-";
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
        .replaceAll("AA", "Ab")
        .replaceAll("BB", "Bb")
        .replaceAll("CC", "Cb")
        .replaceAll("DD", "Db")
        .replaceAll("EE", "Eb")
        .replaceAll("FF", "Fb")
        .replaceAll("GG", "Gb")
        .replaceAll("HH", "Hb")
        .replaceAll("II", "Ib")
        .replaceAll("JJ", "Jb")
        .replaceAll("KK", "Kb")
        .replaceAll("LL", "Lb")
        .replaceAll("MM", "Mb")
        .replaceAll("NN", "Nb")
        .replaceAll("OO", "Ob")
        .replaceAll("PP", "Pb")
        .replaceAll("QQ", "Qb")
        .replaceAll("RR", "Rb")
        .replaceAll("SS", "Sb")
        .replaceAll("TT", "Tb")
        .replaceAll("UU", "Ub")
        .replaceAll("VV", "Vb")
        .replaceAll("WW", "Wb")
        .replaceAll("XX", "Xb")
        .replaceAll("YY", "Yb")
        .replaceAll("ZZ", "Zb")
        .replaceAll("?!", "a")
        .replaceAll("!?", "a")
        .replaceAll("a ", "a")
        .replaceAll(". ", ".")
        .replaceAll(", ", ",")
        .replaceAll("? ", "?")
        .replaceAll("! ", "!")
        .replaceAll("aa", "ab")
        .replaceAll("..", ".b")
        .replaceAll(",,", ",b")
        .replaceAll("??", "?b")
        .replaceAll("!!", "!b");
        sendResult();
}

// Testing Purposes

