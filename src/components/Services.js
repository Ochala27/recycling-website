import React from 'react';
import Header from './Header';

const Services = () => {
    return (
        <div>
            <Header />
            <section id="services" className="services-section">
                <h2>Our Collection Service</h2>
                <p>Our recycling service is convenient, efficient, and rewarding. Here’s how it works:</p>
                <h3>Three Bin System</h3>
                <p><strong>Food Waste Bin:</strong> For organic waste like food scraps and biodegradable materials.</p>
                <p><strong>Rubber Waste Bin:</strong> For items such as tires, rubber gloves, and rubber bands.</p>
                <p><strong>Glass or Paper Bin:</strong> For glass bottles, jars, paper products, and cardboard.</p>
                <p>Each household receives three labeled bins for proper sorting, helping us maximize recycling efforts.</p>
                <h3>Scheduling Interface</h3>
                <p><strong>Weekly Pick-Ups:</strong> Bins are collected every Saturday.</p>
                <p><strong>Emergency Pick-Ups:</strong> Request on-demand service through our website for full bins before the scheduled day.</p>
                <h3>Rewards Program</h3>
                <p><strong>Earn Gifts:</strong> Residents earn gifts for each pick-up.</p>
                <p><strong>Redeem Rewards:</strong> Gifts can be exchanged for eco-friendly products and services.</p>
            </section>
        </div>
    );
};

export default Services;
