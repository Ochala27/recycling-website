import React from 'react';
import Header from './Header';

const FAQ = () => {
    return (
        <div>
            <Header />
            <section className="faq-section">
                <div className="faq-background">
                    <h2>FAQ</h2>
                    <div className="faq-item">
                        <h3>What is Clean4Saver?</h3>
                        <p>Clean4Saver is a recycling company in Nigeria providing reliable collection services, extensive recycling programs, and rewards for participation.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What can I recycle with Clean4Saver?</h3>
                        <p>You can recycle food waste, rubber products, glass, and paper.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How do I sign up?</h3>
                        <p>Sign up on our website by filling out the required information. You’ll receive your recycling bins and be added to our collection schedule.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What rewards can I earn?</h3>
                        <p>Earn bonus for recyclables, redeemable for eco-friendly products and other rewards.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
