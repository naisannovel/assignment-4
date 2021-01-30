document.getElementById('f-class-plus-btn').addEventListener('click',function(){
    ticketQuantity('f-class-inp',true,'f-class-inp','economy-input');
    // 1st two parameters declare for increase and decrease quantity number.
    // 2nd two parameters declare for to get quantity value. so that we can calculate total cost by totalCost function.these 2 parameters have been declared to pass into the totalCost function.
    // the functions are given below.
});

document.getElementById('f-class-minus-btn').addEventListener('click',function(){
    ticketQuantity('f-class-inp',false,'f-class-inp','economy-input');
});

document.getElementById('economy-Plus-Btn').addEventListener('click',function(){
    ticketQuantity('economy-input',true,'f-class-inp','economy-input');
});

document.getElementById('economy-minus-Btn').addEventListener('click',function(){
    ticketQuantity('economy-input',false,'f-class-inp','economy-input');
});





// item quantity calculation.

function ticketQuantity(quantityInputId, isIncrease, firstTicketQuantityInputId, economyTicketQuantityInputId){
    let quantityInput = document.getElementById(quantityInputId);
    let quantityInputNumber = parseInt(quantityInput.value);
    let quantityInputNumberNewCount = quantityInputNumber;

    // quantity plus minus calculation.

    if(isIncrease == true){
        quantityInputNumberNewCount = quantityInputNumber + 1;
    }
    if(isIncrease == false && quantityInputNumber > 0){
        quantityInputNumberNewCount = quantityInputNumber - 1; 
    }

    quantityInput.value = quantityInputNumberNewCount;

    // call subtotal, vat, total calculation function.
    // last two parameters pass into the totalCost function.

    totalCost(firstTicketQuantityInputId,economyTicketQuantityInputId);
};


// subtotal, vat, total calculation.

function totalCost(firstTicketQuantityInputId, economyTicketQuantityInputId){

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




// extra section

document.getElementById('book-now-btn').addEventListener('click',function(){
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('extra-section').style.display = 'block';
    document.getElementById('background').style.backgroundAttachment = 'fixed';

    let firstClassSeat = document.getElementById('f-class-inp').value;
    let economyClassSeat = document.getElementById('economy-input').value;

    if(firstClassSeat == 0 && economyClassSeat == 0){
       let x = document.getElementById('extra-quantity-show');
       x.innerText = `you did not book any seat`;
    }
    else if(firstClassSeat > 0 && economyClassSeat == 0){
        let x = document.getElementById('extra-quantity-show');
       x.innerText = `you booked only first class ${firstClassSeat} seat`
    }
    else if(firstClassSeat == 0 && economyClassSeat > 0){
        let x = document.getElementById('extra-quantity-show');
       x.innerText = `you booked only economy ${economyClassSeat} seat`
    }
    else{
        let x = document.getElementById('extra-quantity-show');
       x.innerText = `you booked ${firstClassSeat} first class and ${economyClassSeat} economy seat`
    }
    if(firstClassSeat > 0 || economyClassSeat > 0){
        let mno = document.getElementById('success-message');
        mno.innerText = `success`;
        mno.style.color ='green';
    }
    else{
        let mno = document.getElementById('success-message');
        mno.innerText = `sorry!`;
        mno.style.color ='red';
    }

    let exsubttl = document.getElementById('subtotal').innerText;
    document.getElementById('extra-subtotal').innerText = exsubttl;

    let vat2 = document.getElementById('vat').innerText;
    document.getElementById('extra-vat').innerText = vat2;

    let total2 = document.getElementById('total').innerText;
    document.getElementById('extra-total').innerText = total2;
})
