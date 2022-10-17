import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import iconDollar from "./assets/images/icon-dollar.svg";
import iconPerson from "./assets/images/icon-person.svg";

function App() {
  // რამდენია გადასახადი
  const [billAmount, setBillAmount] = useState();
  // ხალხის რაოდენობა
  const [numberOfPerson, setNumberOfPerson] = useState();
  // ხურდის რაოდენობა ქ
  const [tipPersentage, setTipPersentage] = useState();
  // ხურდის რაოდენობა დათვლილი
  const [tipAmount, setTipAmount] = useState("$0.00");
  // ჯამი
  const [total, setTotal] = useState("$0.00");
  // ხურდის რაოდენობა ქასტომ
  const [customTip, setCustomTip] = useState("");
  // არავალიდური გადასახადი
  const [invalidBill, setInvalidBill] = useState(false)
  const [invalidPeople, setInvalidPeople] = useState(false)
  const [invalidTip, setInvalidTip] = useState(false)



  const validate =() => {
    let errors = 0
    // validation of bill 
    if(!isNaN(billAmount) && billAmount !== "") {
      setInvalidBill(true)
    } else {
      setInvalidBill(false)
      errors ++
    }
    // validation of Number of people 
    if(!isNaN(numberOfPerson) && numberOfPerson !== "") {
      setInvalidPeople(true)
    } else {
      setInvalidPeople(false)
      errors ++
    }
    // validation of tip 
    if(tipPersentage.length !== 0 || ((!isNaN(customTip) && customTip !== ""))) {
      setInvalidTip(true)
    } else {
      setInvalidTip(false)
      errors ++
    }
    return errors
  }

  const TipAmountCounter = () => {
     const tipAmount = (billAmount/numberOfPerson)*tipPersentage/100
     setTipAmount("$"+tipAmount.toFixed(2))
  }

  const TotalTipCounter = () => {
    const totalTip = billAmount*tipPersentage/100
    setTotal("$"+ totalTip.toFixed(2))
  }

  const sumbitHandler = (e) => {
    e.preventDefault()
    const errors = validate()
    // console.log(invalidBill, invalidPeople, invalidTip)
    if(errors === 0) {
      TipAmountCounter()
      TotalTipCounter()
    }
    
  }

  const billChangeHandler = (e) => {
    setBillAmount(e.target.value);
  };

  const personChangeHandler = (e) => {
    setNumberOfPerson(e.target.value);
  };



  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col bg-light-green">
      <img src={logo} />
      <div className="w-[375px]  bg-white rounded-[25px] mt-10 box-border p-8 xl:w-[920px] flex flex-col xl:flex-row xl:p-8 xl:justify-between xl:pl-12 xl:mt-[88px]">
        <div className="xl:pt-[20px]">
          <div className="flex flex-col relative">
            <label className="font-spaceMono text-font-color font-bold mb-1.5">
              Bill
            </label>
            <input
              onChange={billChangeHandler}
              placeholder="0"
              className="bg-[#F3F9FA] h-[48px] relative rounded-[5px] font-spaceMono text-right box-border pr-[17px] font-bold text-2xl max-w-[379px]"
            />
            <span className="absolute top-[45px] left-[22px]">
              <img src={iconDollar} />
            </span>
          </div>

          <div className="flex flex-col max-w-[379px]">
            <p className="font-spaceMono text-font-color font-bold mt-8 xl:mt-10">
              Select Tip %
            </p>
            <div className="flex flex-wrap gap-[16px] mt-4 mb-8 xl:gap-[14px] xl:mb-10 xl:gap-y-[16px]">
              <input
                onClick={() => setTipPersentage("5")}
                value="5%"
                type="button"
                className="w-[146px] h-[48px] flex justify-center items-center bg-dark-green rounded-[5px] text-white text-2xl font-bold font-spaceMono xl:w-[117px] active:bg-active active:text-dark-green focus:bg-focus cursor-pointer focus:text-dark-green"
              />

              <input
                onClick={() => setTipPersentage("10")}
                value="10%"
                type="button"
                className="w-[146px] h-[48px] flex justify-center items-center bg-dark-green rounded-[5px] text-white text-2xl font-bold font-spaceMono xl:w-[117px] active:bg-active active:text-dark-green focus:bg-focus cursor-pointer  focus:text-dark-green"
              />

              <input
                onClick={() => setTipPersentage("15")}
                value="15%"
                type="button"
                className="w-[146px] h-[48px] flex justify-center items-center bg-dark-green rounded-[5px] text-white text-2xl font-bold font-spaceMono xl:w-[117px] active:bg-active active:text-dark-green focus:bg-focus cursor-pointer  focus:text-dark-green"
              />

              <input
                onClick={() => setTipPersentage("25")}
                value="25%"
                type="button"
                className="w-[146px] h-[48px] flex justify-center items-center bg-dark-green rounded-[5px] text-white text-2xl font-bold font-spaceMono xl:w-[117px] active:bg-active active:text-dark-green focus:bg-focus cursor-pointer focus:text-dark-green"
              />

              <input
                onClick={() => setTipPersentage("50")}
                value="50%"
                type="button"
                className="w-[146px] h-[48px] flex justify-center items-center bg-dark-green rounded-[5px] text-white text-2xl font-bold font-spaceMono xl:w-[117px] active:bg-active active:text-dark-green focus:bg-focus cursor-pointer focus:text-dark-green"
              />

              <input
                onChange={(e) => setTipPersentage(e.target.value)}
                placeholder="Custom"
                className="w-[146px] h-[48px] flex justify-center items-center bg-[#F3F9FA] rounded-[5px]  text-2xl font-bold font-spaceMono text-right box-border px-[17px] text-font-color xl:w-[117px]"
              />
            </div>
            <div className="flex flex-col relative  max-w-[379px]">
              <label className="font-spaceMono text-font-color font-bold mb-1.5">
                Number of People
              </label>
              <input
                onChange={personChangeHandler}
                placeholder="0"
                className="bg-[#F3F9FA] h-[48px] relative rounded-[5px] font-spaceMono text-right box-border pr-[17px] font-bold text-2xl"
              />
              <span className="absolute top-[45px] left-[22px]">
                <img src={iconPerson} />
              </span>
            </div>
          </div>
        </div>

        {/* green box  */}
        <div>
          <div className="  rounded-[15px] bg-dark-green box-border px-10 pt-[56px] pb-6 mt-8 xl:w-[413px]  xl:m-0 ">
            <div className="flex justify-between mb-[25px] ">
              <div className="flex flex-col justify-center">
                <p className="text-white font-bold font-spaceMono">
                  Tip Amount
                </p>
                <p className="text-font-color text-[13px] font-bold font-spaceMono">
                  / person
                </p>
              </div>
              <p className="text-[32px] font-bold text-medium-green font-spaceMono xl:text-[48px]">
                {tipAmount}
              </p>
            </div>
            <div className="flex justify-between mb-[35px] xl:mb-0">
              <div className="flex flex-col justify-center">
                <p className="text-white font-bold font-spaceMono">Total</p>
                <p className="text-font-color text-[13px] font-bold font-spaceMono">
                  / person
                </p>
              </div>
              <p className="text-[32px] font-bold text-medium-green font-spaceMono xl:text-[48px]">
                {total}
              </p>
            </div>
            <button onClick={sumbitHandler} type="submit" className="cursor-pointer h-12 bg-medium-green w-full rounded-[5px] text-dark-green text-xl font-bold font-spaceMono  xl:mb-4  xl:w-[333px] xl:mt-[122px]  active:bg-active active:text-dark-green">
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// 9 40
