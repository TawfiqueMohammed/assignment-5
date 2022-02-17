function getInputValue(budget) {
    const budgetInput = document.getElementById(budget + '-input');
    const newBudgetInput = parseFloat(budgetInput.value);
    return newBudgetInput;
}


document.getElementById('calculate-button').addEventListener('click', function () {
    // defining income input
    const newIncomeInput = getInputValue('income');
    // defining food input
    const newFoodInput = getInputValue('food');
    // defining rent input
    const newRentInput = getInputValue('rent')
    // defining cloth input
    const newClothInput = getInputValue('cloth');


    // taking total expense
    const totalExpenses = document.getElementById('total-expenses');
    const previousTotalExpensesText = totalExpenses.innerText;
    const previousTotalExpenses = parseFloat(previousTotalExpensesText);

    // update total expenses
    const newTotalExpenses = previousTotalExpenses + newFoodInput + newRentInput + newClothInput;
    totalExpenses.innerText = newTotalExpenses;

    // taking balance
    const totalBalance = document.getElementById('balance');
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);

    // update balance
    const balance = newIncomeInput - newTotalExpenses;
    totalBalance.innerText = balance;

});

document.getElementById('save-button').addEventListener('click', function () {
    // defining income input
    const newIncomeInput = getInputValue('income');

    // save part
    const newSaveInput = getInputValue('save');

    const savingAmount = document.getElementById('saving-amount');
    const previousSavingAmountText = savingAmount.innerText;
    // const previousSavingAmount = parseFloat(previousSaveInputText);

    // update saving amount
    const newSavingAmount = (newIncomeInput * newSaveInput) / 100;
    savingAmount.innerText = newSavingAmount;





    // defining food input
    const newFoodInput = getInputValue('food');

    // defining rent input
    const newRentInput = getInputValue('rent')

    // defining cloth input
    const newClothInput = getInputValue('cloth');

    // taking total expense
    const totalExpenses = document.getElementById('total-expenses');
    const previousTotalExpensesText = totalExpenses.innerText;
    const previousTotalExpenses = parseFloat(previousTotalExpensesText);

    // update total expenses
    const newTotalExpenses = previousTotalExpenses + newFoodInput + newRentInput + newClothInput;
    ///////////////////totalExpenses.innerText = newTotalExpenses;

    // taking balance
    const totalBalance = document.getElementById('balance');
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);

    // update balance
    const balance = newIncomeInput - newTotalExpenses;
    /////////////////////totalBalance.innerText = balance;





    // defining remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    const previousRemainingBalanceText = remainingBalance.innerText;
    const previousRemainingBalance = parseFloat(previousRemainingBalanceText);
    // update remaining balance
    const newRemainingBalance = previousTotalBalance - newSavingAmount;
    remainingBalance.innerText = previousRemainingBalance + newRemainingBalance;
});