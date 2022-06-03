const sliderBar = document.querySelector(".price-range");
const priceAmount = document.querySelector('#price');
const viewsCount = document.querySelector('#views');
const monthlyBilling = document.querySelector('#monthly-billing');

sliderBar.oninput = sliderUI; // oninput : triggers everytime the value changes
monthlyBilling.onclick = priceHandler; // when toggle is clicked it will display discounted values



function priceHandler () {
  let value = parseInt(sliderBar.value)
  const discount = (value *25)/100
  if(!monthlyBilling.checked){
    priceAmount.innerHTML= `${parseFloat(value).toFixed(2)} <span>/month`;
  }else {
    priceAmount.innerHTML= `${parseFloat(value - discount).toFixed(2) } <span>/month`;

  }

 if(value >= 8 && value <12) {
      viewsCount.textContent = '10K PAGEVIEWS'

 }else if( value >= 12 && value <16) {
  viewsCount.textContent = '50K PAGEVIEWS'

 }else if( value >= 16 && value <24) {
  viewsCount.textContent = '100K PAGEVIEWS'

 }else if( value >= 24 && value <36) {
  viewsCount.textContent = '500K PAGEVIEWS'

 }else if( value == 36) {
  viewsCount.textContent = '1M PAGEVIEWS'

 }
  
}


function sliderUI() {
  let sliderValue = sliderBar.value; // get the value of slider

  let minValue = sliderBar.min; // min value of slider

  // find numbers between max and min(36 - 8 = 28), how many percent does each numbher represent (28 / 100 = 3.57), subtract current sValue from min (8)
  let percentage = (sliderValue - minValue) * 3.57;

  sliderBar.style.background = `linear-gradient(90deg, var(--soft-cyan) ${percentage}%, var(--empty-slideer) 0)`;
  priceHandler()
  // console.log(percentage);
}




 