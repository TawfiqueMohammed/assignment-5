document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const newIncomeInputText = incomeInput.value;
    const newIncomeInput = parseFloat(newIncomeInputText);

    const foodInput = document.getElementById('food-input');
    const newFoodInputText = foodInput.value;
    const newFoodInput = parseFloat(newFoodInputText);

    const rentInput = document.getElementById('rent-input');
    const newRentInputText = rentInput.value;
    const newRentInput = parseFloat(newRentInputText);

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

    // save part
    const saveInput = document.getElementById('save');
    const newSaveInputText = saveInput.value;
    const newSaveInput = parseFloat(newSaveInputText);

});