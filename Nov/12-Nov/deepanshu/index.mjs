
// placing order
function placeOrder() {
    console.log("order placed...");
}

// upi verification
function validePaymentSystem() {
    verify("xyz@icici", deductMoney);
}

function deductMoney() {
    console.log("Deducting Money..");
}

placeOrder();
// verify();
validePaymentSystem();

// deductMoney();

function verify(upi, cb) {
    setInterval((upi) => {
        console.log("Verified ");
        cb();
        // cb();  at third party my mistake may be called two times
    }, 2000);
}