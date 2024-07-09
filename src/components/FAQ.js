import React from 'react';

const FAQ = () => {
    return (
        <section className="faq-section">
            <div className="faq-background">
                <h2>FAQ</h2>
                <div className="faq-item">
                    <h3>What is Kavv?</h3>
                    <p>Kavv is a recycling company in Nigeria providing reliable collection services, extensive recycling programs, and rewards for participation.</p>
                </div>
                <div className="faq-item">
                    <h3>What can I recycle with Kavv?</h3>
                    <p>You can recycle food waste, rubber products, glass, and paper.</p>
                </div>
                <div className="faq-item">
                    <h3>How do I sign up?</h3>
                    <p>Sign up on our website by filling out the required information. You’ll receive your recycling bins and be added to our collection schedule.</p>
                </div>
                <div className="faq-item">
                    <h3>What rewards can I earn?</h3>
                    <p>Earn points for recyclables, redeemable for eco-friendly products and other rewards.</p>
                </div>
                <div className="faq-item">
                    <h3>What if my bins are full before pickup?</h3>
                    <p>Request an emergency pickup via our website or customer service.</p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
