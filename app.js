const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');

confirmBtn.addEventListener('click', () => {
    // console.log('It works!');
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 ||
        enteredAmount.trim().length <= 0)
    {
        console.log('Please, review the values to be added');
        return;
    }

    console.log(enteredReason, enteredAmount);
})