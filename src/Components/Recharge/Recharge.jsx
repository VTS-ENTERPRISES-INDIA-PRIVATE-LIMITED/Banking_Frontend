import React, { useState } from 'react';
import './Recharge.css';

function Recharge() {
    const plans = [
        { name: 'Basic Plan', amount: 100, perks: ['access to basic features'], validity: '28days' },
        { name: 'Standard Plan', amount: 200, perks: ['unlimited calls', '100 sms per day'], validity: '28days' },
        { name: 'Premium Plan', amount: 300, perks: ['unlimited calls', '100 sms per day', 'jiosaavn pro subscription'], validity: '28days' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPlans = plans.filter(plan => 
        plan.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="recharge-container">
            <div classname="header">
            <h1>Recharge Plans</h1>
            </div>
            <input
                type="text"
                placeholder="Search for a plan..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-bar"
            />
            <div className="card-container">
                {filteredPlans.map((plan, index) => (
                    <div key={index} className="card">
                        <h3>{plan.name}</h3>
                        <p>Amount: {plan.amount}</p>
                        <p>Perks: {plan.perks.join(', ')}</p>
                        <p>Validity: {plan.validity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recharge;
