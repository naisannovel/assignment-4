document.getElementById('f-class-plus-btn').addEventListener('click', function () {
    ticketQuantity('f-class-inp', true, 'f-class-inp', 'economy-input');
    // 1st two parameters declare for increase and decrease quantity number.
    // 2nd two parameters declare for to get quantity value. so that we can calculate total cost by totalCost function.these 2 parameters have been declared to pass into the totalCost function.
    // the functions are given below.
});

document.getElementById('f-class-minus-btn').addEventListener('click', function () {
    ticketQuantity('f-class-inp', false, 'f-class-inp', 'economy-input');
});

document.getElementById('economy-Plus-Btn').addEventListener('click', function () {
    ticketQuantity('economy-input', true, 'f-class-inp', 'economy-input');
});

document.getElementById('economy-minus-Btn').addEventListener('click', function () {
    ticketQuantity('economy-input', false, 'f-class-inp', 'economy-input');
});





// item quantity calculation.

function ticketQuantity(quantityInputId, isIncrease, firstTicketQuantityInputId, economyTicketQuantityInputId) {
    let quantityInput = document.getElementById(quantityInputId);
    let quantityInputNumber = parseInt(quantityInput.value);
    let quantityInputNumberNewCount = quantityInputNumber;

    // quantity plus minus calculation.

    if (isIncrease == true) {
        quantityInputNumberNewCount = quantityInputNumber + 1;
    }
    if (isIncrease == false && quantityInputNumber > 0) {
        quantityInputNumberNewCount = quantityInputNumber - 1;
    }

    quantityInput.value = quantityInputNumberNewCount;

    // call subtotal, vat, total calculation function.
    // last two parameters pass into the totalCost function.

    totalCost(firstTicketQuantityInputId, economyTicketQuantityInputId);
};


// subtotal, vat, total calculation.

function totalCost(firstTicketQuantityInputId, economyTicketQuantityInputId) {

    // subtotal calculation.

    let firstTicketQuantity = document.getElementById(firstTicketQuantityInputId).value;
    let economyTicketQuantity = document.getElementById(economyTicketQuantityInputId).value;
    let subTotal = firstTicketQuantity * 150 + economyTicketQuantity * 100;
    let subTotalValue = document.getElementById('subtotal');
    subTotalValue.innerText = subTotal;

    // vat calculation.

    let vat = subTotal * 0.1;
    let totalVat = document.getElementById('vat');
    totalVat.innerText = vat;

    // total amount.

    let totalSum = document.getElementById('total');
    totalSum.innerText = subTotal + vat;
};




// bonus section

document.getElementById('book-now-btn').addEventListener('click', function () {

    document.getElementById('main-content').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'block';
    document.getElementById('body-background').style.backgroundAttachment = 'fixed';

    let firstClassSeatQuantityValue = document.getElementById('f-class-inp').value;
    let economyClassSeatQuantityValue = document.getElementById('economy-input').value;

    // quantity value display in bonus section.

    if (firstClassSeatQuantityValue == 0 && economyClassSeatQuantityValue == 0) {
        let confirmMessage = document.getElementById('bonus-quantity-value-display');
        confirmMessage.innerText = `you did not book any seat.`;
    } else if (firstClassSeatQuantityValue > 0 && economyClassSeatQuantityValue == 0) {
        let confirmMessage = document.getElementById('bonus-quantity-value-display');
        confirmMessage.innerText = `you booked only first class ${firstClassSeatQuantityValue} seat.`
    } else if (firstClassSeatQuantityValue == 0 && economyClassSeatQuantityValue > 0) {
        let confirmMessage = document.getElementById('bonus-quantity-value-display');
        confirmMessage.innerText = `you booked only economy ${economyClassSeatQuantityValue} seat.`
    } else {
        let confirmMessage = document.getElementById('bonus-quantity-value-display');
        confirmMessage.innerText = `you booked ${firstClassSeatQuantityValue} first class and ${economyClassSeatQuantityValue} economy seat.`
    }

    // bonus section confirmation success/sorry message.

    if (firstClassSeatQuantityValue > 0 || economyClassSeatQuantityValue > 0) {
        let successMessage = document.getElementById('bonus-confirmation-text');
        successMessage.innerText = `success`;
        successMessage.style.color = 'green';
    } else {
        let successMessage = document.getElementById('bonus-confirmation-text');
        successMessage.innerText = `sorry!`;
        successMessage.style.color = 'red';
    };

    // subTotal, vat, total value passed in bonus section; 

    let subTotalValue = document.getElementById('subtotal').innerText;
    document.getElementById('bonus-section-subtotal').innerText = subTotalValue;

    let vat = document.getElementById('vat').innerText;
    document.getElementById('bonus-section-vat').innerText = vat;

    let totalValue = document.getElementById('total').innerText;
    document.getElementById('bonus-section-total').innerText = totalValue;
})