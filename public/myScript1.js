function calculatePrice() {
    var s = document.getElementById("salary").value;
    var d = document.getElementById("days").value;
    console.log("Calculating price")
    console.log(s)
    console.log(d)
    let finalPrice = 0;
    dailyRate = s/365;
    finalPrice = dailyRate * d;
    roundFinalPrice = Math.round(finalPrice / 100) * 100;

    document.getElementById("finalPrice").innerHTML = roundFinalPrice;
  }