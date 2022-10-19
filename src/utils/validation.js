 export const validate = (billAmount,numberOfPerson,tipPersentage) => {
  let errors = 0;
  // validation of bill
  if (!isNaN(billAmount) && billAmount !== "") {
  } else {
    errors++;
  }
  // validation of Number of people
  if (numberOfPerson == 0) {
  } else {
  }
  if (!isNaN(numberOfPerson) && numberOfPerson !== "") {
  } else {
    errors++;
  }
  // validation of tip
  if (tipPersentage.length !== 0) {
  } else {
    errors++;
  }
  return errors;
};

export const validatePerson = (peopleIsZero) => {
  if (peopleIsZero === "0" ) {
    return true;
  } else {
    return false
  }
};

