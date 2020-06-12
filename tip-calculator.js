var slider = document.getElementById("slider");
var output = document.getElementById("tip");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var tip_amount=document.getElementById("tip-amount")
var amount=document.getElementById("amount")
var set_amount=document.getElementById("set-btn")
var total_bill=document.getElementById("total-bill")
set_amount.onclick=function(){
    tip_amount.innerHTML=parseInt((amount.value*output.innerHTML)/100)
    total_bill.innerHTML=parseInt(amount.value) + parseInt(tip_amount.innerHTML) 
}