const incomeInput = document.getElementById('income-input');
const foodInput = document.getElementById('food-input');
const rentInput = document.getElementById('rent-input');
const clothInput = document.getElementById('cloth-input');
const saveInput = document.getElementById('save-input');
const balanceinput = document.getElementById('balance');
const totalExpense = document.getElementById('total-expenses')
const saveAmount2 = document.getElementById('saving-amount');
const remainingBal = document.getElementById("remaining-balance");
const errorInput = document.getElementById('error-msg');
const errorInput2 = document.getElementById('error-msg2');

errorInput.style.display = 'none';
errorInput2.style.display = 'none';

function errorMessage(event) {
    if (event == 1) {
        errorInput.style.display = 'block';
        errorInput.innerText = 'Invalid Input';
    }
    else if (event == 2) {
        errorInput.style.display = 'block';
        errorInput.innerText = 'Expenses cannot be greater than income';
    }
    else if (event == 3) {
        errorInput2.style.display = 'block';
        errorInput2.innerText = 'Saving amount cannot be greater than balance';
    }
    else if (event == 4) {
        errorInput2.style.display = 'block';
        errorInput2.innerText = 'Invalid Input';
    }
    else if (event == 5) {
        errorInput.style.display = 'block';
        errorInput.innerText = 'Invalid Input';
    }
}
function totalExpences(foodCost, rentCost, clothCost) {
    let expense = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    return expense;
}

// calculate button action 
document.getElementById('calculate-button').addEventListener("click", function () {
    errorInput.style.display = 'none';
    errorInput2.style.display = 'none';
    if (
        isNaN(incomeInput.value) || isNaN(rentInput.value) || isNaN(clothInput.value) || isNaN(foodInput.value) || incomeInput.value < 0 || rentInput.value < 0 || clothInput.value < 0 || foodInput.value < 0
    ) {
        errorMessage(1);
    }
    else if (incomeInput.value == '' || rentInput.value == '' || clothInput.value == '' || foodInput.value == '') {
        errorMessage(5);
    }
    else {
        const totalSum = totalExpences(foodInput.value, rentInput.value, clothInput.value);

        if (totalSum <= incomeInput.value) {
            totalExpense.innerText = totalSum;
            const balance = parseFloat(incomeInput.value) - totalSum;
            balanceinput.innerText = balance;
        }
        else {
            errorMessage(2);
        }
    }
});

// save button action 
document.getElementById('save-button').addEventListener('click', function () {
    errorInput.style.display = 'none';
    errorInput2.style.display = 'none';
    if (isNaN(saveInput.value) || parseFloat(saveInput.value) < 0
        || saveInput.value == "" || incomeInput.value == '') {
        errorMessage(4);
    }
    else {
        const saveAmount = (parseFloat(saveInput.value) * parseFloat(incomeInput.value)) / 100;
        if (saveAmount <= parseFloat(balanceinput.innerText)) {
            saveAmount2.innerText = saveAmount;
            const remain = parseFloat(incomeInput.value) -
                (totalExpences(parseFloat(foodInput.value), parseFloat(clothInput.value), parseFloat(rentInput.value)) +
                    saveAmount);
            remainingBal.innerText = remain;
        }
        else {
            errorMessage(3);
        }
    }
});
