let pawn1Var = document.getElementById("pawn1");
let spansVar = document.getElementsByTagName("span");

spansVar[50].addEventListener("click", function () {
    if (spansVar[50].value === "&#9817;") {
        spansVar[50].style.backgroundColor = "yellow";
    }
});
