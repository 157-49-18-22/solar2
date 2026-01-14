import React, { useState } from 'react';
import './AICalculator.css';

const AICalculator = () => {
    const [billAmount, setBillAmount] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setBillAmount(value);
        if (!value) setResult(null);
    };

    const calculateSolar = (e) => {
        e.preventDefault();
        if (!billAmount) return;

        setLoading(true);

        // Simulating "AI" processing time
        setTimeout(() => {
            const units = parseFloat(billAmount) / 8; // Avg cost per unit ₹8
            const systemSize = units / 120; // 1kW generates ~120 units/month
            const annualSavings = parseFloat(billAmount) * 12;

            setResult({
                units: Math.round(units),
                systemSize: systemSize.toFixed(2),
                annualSavings: annualSavings.toLocaleString('en-IN'),
                panels: Math.ceil(systemSize * 1000 / 550) // Assuming 550W panels
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <section className="ai-calculator-section">
            <div className="container">
                <div className="calculator-wrapper">
                    <div className="calculator-header">
                        <span className="ai-badge">AI Powered</span>
                        <h2>Solar Savings Estimator</h2>
                        <p>Enter your monthly electricity bill to instantly see your potential savings and required system size.</p>
                    </div>

                    <div className="calculator-content">
                        <form onSubmit={calculateSolar} className="calculator-form">
                            <div className="input-group">
                                <label>Monthly Electricity Bill (₹)</label>
                                <input
                                    type="number"
                                    placeholder="e.g. 5000"
                                    value={billAmount}
                                    onChange={handleInputChange}
                                    min="0"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary calculate-btn" disabled={loading}>
                                {loading ? (
                                    <span className="loader">Analyzing Usage...</span>
                                ) : (
                                    <>
                                        Calculate Savings <span className="icon">⚡</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {result && (
                            <div className="results-display fade-in">
                                <div className="result-card highlight">
                                    <h3>Recommended System</h3>
                                    <div className="big-number">{result.systemSize} kW</div>
                                    <p>Requires approx. {result.panels} panels</p>
                                </div>
                                <div className="result-card">
                                    <h3>Est. Annual Savings</h3>
                                    <div className="big-number text-green">₹{result.annualSavings}</div>
                                    <p>That's money in your pocket!</p>
                                </div>
                                <div className="result-card">
                                    <h3>Monthly Usage</h3>
                                    <div className="big-number">{result.units} Units</div>
                                    <p>Based on ₹8/unit average</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AICalculator;
