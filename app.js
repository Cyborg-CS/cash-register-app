const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const errorMessage = document.querySelector("#error-message");


checkButton.addEventListener("click", function validateBillAndCash(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const returnAmount = cashGiven.value - billAmount.value
            calculateChange(returnAmount);
          }else{
            
              showMessage("Insufficient cash received !");
          } 
    }else{
        showMessage("Invalid Bill Amount !");
    } 
})


function calculateChange()

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(message){
    errorMessage.style.display ="block";
        errorMessage.innerText = message;
}