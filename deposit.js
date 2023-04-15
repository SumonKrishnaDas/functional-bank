


 
 document.getElementById('btn-deposit').addEventListener('click',deposit);

 function deposit(){

     const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal= getInputElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal+ newDepositAmount;
    setTextElementByID('deposit-total',newDepositTotal);


    const previousBalanceTotal=getInputElementValueById('balance-total');

    const newBalanceTotal= previousBalanceTotal+newDepositAmount;
    setTextElementByID('balance-total',newBalanceTotal);




 }
 
