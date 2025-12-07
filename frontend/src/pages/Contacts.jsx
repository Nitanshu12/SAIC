import "../styles/contacts.css";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <div className="contact-page">
            <section className="contact-banner">
                <div className="contact-banner-content">
                    <h1 className="contact-banner-title">
                        <span className="contact-title-white">Get In</span>{" "}
                        <span className="contact-title-yellow">Touch</span>
                    </h1>
                    <p className="contact-banner-subtitle">
                        We're here to help you achieve your study abroad dreams.
                        <br />
                        Reach out to us and let's start your journey together.
                    </p>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        {/* Contact Form - Left Side */}
                        <div className="contact-form-wrapper">
                            <div className="contact-form-header">
                                <Send className="contact-form-icon" size={24} />
                                <h2 className="contact-form-title">Send us a Message</h2>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Tell us about your study abroad goals, preferred destinations, or any questions you have..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="contact-submit-btn">
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information - Right Side */}
                        <div className="contact-info">
                            <h2 className="contact-info-title">Contact Information</h2>
                            <p className="contact-info-desc">
                                Connect with our expert counselors through multiple channels. We're here to answer your questions and guide you through your study abroad journey.
                            </p>

                            <div className="contact-info-items">
                                <div className="contact-info-card">
                                    <MapPin size={24} color="#2563eb"/>
                                    <div className="contact-info-content">
                                        <h3>Office Address</h3>
                                        <p>Connaught Place</p>
                                        <p>New Delhi - 110001</p>
                                        <p>India</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <Phone size={24} color="#2563eb"/>
                                    <div className="contact-info-content">
                                        <h3>Phone Numbers</h3>
                                        <p>+91-11-XXXX-XXXX</p>
                                        <p>+91-98XXX-XXXXX</p>
                                        <p>Toll Free: 1800-XXX-XXXX</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                    <Mail size={24} color="#2563eb"/>
                                    <div className="contact-info-content">
                                        <h3>Email Addresses</h3>
                                        <p>info@scholarsabroad.com</p>
                                        <p>admissions@scholarsabroad.com</p>
                                        <p>support@scholarsabroad.com</p>
                                    </div>
                                </div>

                                <div className="contact-info-card">
                                        <Clock size={24} />
                                    <div className="contact-info-content">
                                        <h3>Office Hours</h3>
                                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="visit-office-section">
                <div className="container">
                    <div className="visit-office-wrapper">
                        <div className="visit-office-card">
                            <h2 className="visit-office-title">
                                Visit Our <span className="visit-office-highlight">Office</span>
                            </h2>
                            <p className="visit-office-subtitle">
                                Located in the heart of New Delhi, easily accessible by metro and public transport.
                            </p>
                            <div className="visit-office-buttons">
                                <button 
                                    className="visit-office-btn visit-office-btn-primary"
                                    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Connaught+Place+New+Delhi', '_blank')}
                                >
                                    <MapPin size={20} />
                                    Get Directions
                                </button>
                                <button 
                                    className="visit-office-btn visit-office-btn-secondary"
                                    onClick={() => alert('Schedule Visit feature coming soon!')}
                                >
                                    Schedule Visit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}