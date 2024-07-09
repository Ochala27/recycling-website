import React from 'react';

const MainContent = () => {
    return (
        <main className="main-content">
            <section id="home">
                <h2>Mission Statement</h2>
                <p>Our mission is a world where every piece of waste is transformed into a resource, contributing to a cleaner, healthier planet.</p>
            </section>
            <section id="partnership">
                <h2>Partnership</h2>
                <p>We are proud to collaborate with the Nigeria Army Estate Scheme, a significant step towards our mission of creating a sustainable future. Through this partnership, we are committed to providing reliable and extensive recycling services to the households within every estate managed by the Nigeria Army.</p>
            </section>
            <section id="features">
                <h2>Key Features</h2>
                <div className="feature">
                    <h3>Reliable Collection</h3>
                    <p>Our recycling service offers a dependable collection system, ensuring that recyclable materials are picked up on a regular schedule. Households receive dedicated bins for different types of waste and can rely on our punctual weekly pickups, as well as emergency collection requests.</p>
                </div>
                <div className="feature">
                    <h3>Extensive Recycling</h3>
                    <p>We are committed to extensive recycling, covering a broad range of materials including food waste, rubber, glass, and paper. By providing clear guidelines and easy-to-use bins, we ensure that more waste is recycled efficiently, reducing the amount sent to landfills.</p>
                </div>
                <div className="feature">
                    <h3>Recycling Products as Gifts</h3>
                    <p>To motivate and reward our users, we offer a unique rewards program where participants can earn points for their recycling efforts. These points can be redeemed for eco-friendly products, making recycling not only beneficial for the environment but also rewarding for individuals.</p>
                </div>
            </section>
            <section id="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"I never realized how much waste we could recycle until Clean4Saver started their services in our estate. It's been a game-changer for our household."</p>
                    <h4>- Amina Oji</h4>
                </div>
                <div className="testimonial">
                    <p>"The rewards program is fantastic! It's motivating to see our recycling efforts translate into points we can use for eco-friendly products."</p>
                    <h4>- John Ochai</h4>
                </div>
                <div className="testimonial">
                    <p>"The partnership with Clean4Saver has made recycling so easy and rewarding. Our estate is cleaner, and we're all more conscious of our waste habits."</p>
                    <h4>- Nigeria Army Estate</h4>
                </div>
            </section>
        </main>
    );
};

export default MainContent;
