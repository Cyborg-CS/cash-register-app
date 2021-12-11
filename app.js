const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error-message");
const notesSection = document.querySelectorAll(".notes");

const noOfNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]

checkButton.addEventListener("click", function validateBillAndCash() {
    hideMessage();
    if (billAmount.value > 0) {

    } else {
        showMessage("Invalid Bill Amount !");
    }
    if (billAmount.value <= cashGiven.value) {
        const returnAmount = cashGiven.value - billAmount.value;
        calculateChange(returnAmount);
    } else {
        showMessage("Insufficient Cash Received !");
    }
})


function calculateChange(returnAmount) {
    for (let i = 0; i < noOfNotes.length; i++) {
        const currentNote = Math.trunc(
            returnAmount / noOfNotes[i]
        );
        returnAmount %= noOfNotes[i];
        notesSection[i].innerText = currentNote;

    }
}


function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}