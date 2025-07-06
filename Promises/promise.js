const cart = ['shoes', 'watch', 'shirt'];

createOrder(cart).
    then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
        return paymentInfo;
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(orderDetails){
        console.log(orderDetails);
        return orderDetails;
    })
    .then(function(orderDetails){
        return updateWallet(orderDetails);
    })
    .then(function(walletBalance){
        console.log(walletBalance);
    })
    .catch(function(err){
        console.log(err.message);
    })

function validateCart(){
    return true;
}
function createOrder(cart){
    return new Promise(function(resolve, reject){
        if(!validateCart()){
            const err = new Error('Cart is not valid');
            return reject(err);
        }
        const orderId = '12345';
        if(orderId){
            setTimeout(function(){ 
                resolve(`Order id is : ${orderId}`);
            }, 3000);
        }
    });
}


function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        if(orderId){
            resolve('Payment succesfully completed');
        }
        else{
            reject(new Error('Payment failed'));
        }
    });
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve, reject){
        if(paymentInfo){
            resolve('Order successfully placed');
        }
        else{
            reject(new Error('Unable to place the order'));
        }
    })
}

function updateWallet(orderDetails){
    return new Promise(function(resolve, reject){
        if(orderDetails){
            resolve('Wallet Updated');
        }
        else{
            reject(new Error('Paid by UPI'));
        }
    })
}