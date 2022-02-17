document.getElementById('calculate-button').addEventListener('click', function () {
    // defining income input
    const incomeInput = document.getElementById('income-input');
    const newIncomeInputText = incomeInput.value;
    const newIncomeInput = parseFloat(newIncomeInputText);

    // defining food input
    const foodInput = document.getElementById('food-input');
    const newFoodInputText = foodInput.value;
    const newFoodInput = parseFloat(newFoodInputText);

    // defining rent input
    const rentInput = document.getElementById('rent-input');
    const newRentInputText = rentInput.value;
    const newRentInput = parseFloat(newRentInputText);

    // defining cloth input
    const clothInput = document.getElementById('cloth-input');
    const newClothInputText = clothInput.value;
    const newClothInput = parseFloat(newClothInputText);

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
    // const previousTotalBalance = parseFloat(previousTotalBalanceText);

    // update balance
    const balance = newIncomeInput - newTotalExpenses;
    totalBalance.innerText = balance;

});

document.getElementById('save-button').addEventListener('click', function () {
    // defining income input
    const incomeInput = document.getElementById('income-input');
    const newIncomeInputText = incomeInput.value;
    const newIncomeInput = parseFloat(newIncomeInputText);

    // save part
    const saveInput = document.getElementById('save-input');
    const newSaveInputText = saveInput.value;
    const newSaveInput = parseFloat(newSaveInputText);

    const savingAmount = document.getElementById('saving-amount');
    const previousSavingAmountText = savingAmount.innerText;
    // const previousSavingAmount = parseFloat(previousSaveInputText);

    const newSavingAmount = (newIncomeInput * newSaveInput) / 100;
    console.log(newSavingAmount);
    savingAmount.innerText = newSavingAmount;
});