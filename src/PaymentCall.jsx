import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [exchange_rate, setExchange] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/process_payment/', { amount, currency, exchange_rate,});
            setConvertedAmount(response.data.converted_amount);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Payment Form</h1>
            <form onSubmit={handlePaymentSubmit}>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} />
                <input type="text" value={currency} onChange={(e) => setExchange(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {convertedAmount && (
                <div>
                    <h2>Converted Amount:</h2>
                    <p>{convertedAmount}</p>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
