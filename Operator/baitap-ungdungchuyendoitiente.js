function Convert() {
    let Amount = document.getElementById("amount").value;
    let FromCurrency = document.getElementById("fc").value;
    let ToCurrency = document.getElementById("tc").value;
    let Result

    if (FromCurrency === "VietNam" && ToCurrency === "USD") {
        Result = "$" + (Amount / 23000);
    }
    else if (FromCurrency === "VietNam" && ToCurrency === "VND") {
        Result = Amount + " VND";
    }
    else if (FromCurrency === "USA" && ToCurrency === "VND") {
        Result = Amount * 23000 + " VND";
    }
    else {
        Result = "$" + Amount;
    }
        document.getElementById("result").innerHTML = "Result: " + Result;
}


