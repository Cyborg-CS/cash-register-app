const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const billErrorMessage = document.querySelector("#error-message-1");
const cashErrorMessage = document.querySelector("#error-message-2")
const notesSection = document.querySelectorAll(".notes");
const totalChange =  document.querySelector("#total-change");

const noOfNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]


checkButton.addEventListener("click", function validateBillAndCash() {
   
    hideMessageForBill();
    hideMessageForCash();
    
    let actualBillAmount = Number(billAmount.value);
    let actualCashGiven = Number(cashGiven.value); 
    
    
   if(actualBillAmount > 0){
       if(actualBillAmount <  actualCashGiven){
           const returnAmount =  actualCashGiven - actualBillAmount;
           totalChange.innerText = returnAmount;
           calculateChange(returnAmount)
       }else{
           showMessageForCash("Insufficient Cash Received !")
       }
   }else{
       showMessage("Invalid Bill Amount !");
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


function hideMessageForBill() {
    billErrorMessage.style.display = "none";
}

function hideMessageForCash() {
    cashErrorMessage.style.display = "none";
}

function showMessage(message) {
    billErrorMessage.style.display = "block";
    billErrorMessage.innerText = message;
}

function showMessageForCash(msg) {
    cashErrorMessage.style.display = "block";
    cashErrorMessage.innerText = msg;
}