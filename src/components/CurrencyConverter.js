import React, { useState } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(0); // Added payment amount state
  const [error, setError] = useState(null);

  const handleCurrencyConversion = async () => {
    try {
      const response = await axios.get(`/api/exchange-rate/get_exchange_rate/?base_currency=${baseCurrency}&target_currency=${targetCurrency}`);
      setExchangeRate(response.data.exchange_rate);
      setError(null);

      // Make payment request using exchange rate and payment amount
      const convertedAmount = paymentAmount * exchangeRate;
      const paymentResponse = await axios.post('/api/payment/process_payment/', { amount: convertedAmount });

      // Process payment response as needed
      console.log('Payment success:', paymentResponse.data.success);
      console.log('Payment message:', paymentResponse.data.message);

    } catch (err) {
      setError('Failed to fetch exchange rate. Please try again later.');
      setExchangeRate('');
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <label>
        Base Currency:
        <input type="text" value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)} />
      </label>
      <label>
        Target Currency:
        <input type="text" value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)} />
      </label>
      {/* Added input field for payment amount */}
      <label>
        Payment Amount:
        <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(parseFloat(e.target.value))} />
      </label>
      <button onClick={handleCurrencyConversion}>Convert and Pay</button>
      {exchangeRate ? (
        <p>
          Exchange Rate: {baseCurrency} to {targetCurrency} is {exchangeRate}
        </p>
      ) : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default CurrencyConverter;
