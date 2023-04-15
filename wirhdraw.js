document.getElementById('btn-withdraw').addEventListener('click', withdraw);


function withdraw(){


    const newWithDrawAmount = getInputFieldValueById('withdraw-field');
    const  previousWithdrawTotal= getInputElementValueById('withdraw-total');
    const newWithDrawTotal = previousWithdrawTotal + newWithDrawAmount;
setTextElementByID('withdraw-total',newWithDrawTotal);
const previousBalanceTotal = getInputElementValueById('balance-total');
const newBalanceTotal=previousBalanceTotal-newWithDrawAmount;
setTextElementByID('balance-total',newBalanceTotal);





}