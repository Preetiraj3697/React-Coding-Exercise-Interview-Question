import React, { useState } from "react";

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const exchangeRate = {
    USD: { INR: 83.26 },
    INR: { USD: 0.012 },
  };

  const handleConvert = () => {
    const convertedAmount = amount * exchangeRate[baseCurrency][targetCurrency];
    setConvertedAmount(convertedAmount);
  };

  return (
    <div>
      <h1>Currency Converter</h1>

      <div>
        <label htmlFor="baseCurrency">Base currency:</label>
        <select
          id="baseCurrency"
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>

      <div>
        <label htmlFor="targetCurrency">Target currency:</label>
        <select
          id="targetCurrency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>

      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button onClick={handleConvert}>Convert</button>

      <div>
        <h2>Converted amount: {convertedAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CurrencyConverter;

// import React, { useState } from "react";

// const CurrencyConverter = () => {
//   const [amount, setAmount] = useState(0);
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const convertCurrency = async () => {
//     const response = await fetch(
//       `https://api.exchangerate-api.com/v4/latest/USD`
//     );
//     const exchangeRate = response.data.rates.INR;
//     const convertedAmount = amount * exchangeRate;

//     setConvertedAmount(convertedAmount);
//   };

//   const handleChange = (e) => {
//     setAmount(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Currency Converter</h1>
//       <input
//         type="number"
//         value={amount}
//         onChange={handleChange}
//         placeholder="Enter amount in INR"
//       />
//       <button onClick={convertCurrency}>Convert to USD</button>
//       <p>Converted amount: ${convertedAmount}</p>
//     </div>
//   );
// };

// export default CurrencyConverter;
