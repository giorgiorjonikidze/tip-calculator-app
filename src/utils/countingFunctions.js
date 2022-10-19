 export const tipAmountCounter = (billAmount,numberOfPerson,tipPersentage) => {
    const tipAmount = ((billAmount / numberOfPerson) * tipPersentage) / 100;
    return("$" + tipAmount.toFixed(2));
  };

  export const totalTipCounter = (billAmount, tipPersentage) => {
    const totalTip = (billAmount * tipPersentage) / 100;
    return("$" + totalTip.toFixed(2));
  };

