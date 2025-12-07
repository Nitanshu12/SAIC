import React from 'react';
import { Target, CheckCircle } from 'lucide-react';
import '../styles/about.css';

const australiaHighlights = [
    {
      title: "Experienced Consultants",
      description:
        "Our team of highly experienced and knowledgeable consultants provides accurate and up-to-date information on various universities, courses, and countries.",
      icon: "🎓",
    },
    {
      title: "Comprehensive Approach",
      description:
        "We take a holistic approach to student counseling, considering each student's unique strengths, preferences, and aspirations.",
      icon: "🛂",
    },
    {
      title: "Strong Network",
      description:
        "Our established relationships with numerous universities and educational institutions worldwide provide students with a wide range of options.",
      icon: "🎖️",
    },
    {
      title: "Ethical Practices",
      description:
        "We operate with the utmost integrity and transparency, prioritizing the interests of our students.",
      icon: "🌐",
    },
    // {
    //     title: "Ethical Practices",
    //     description:
    //       "Access to 500+ universities worldwide with a special focus on Australian institutions.",
    //     icon: "🌐", 
    // }
    
  ];

const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="about-banner">
        <div className="about-banner-content">
          <h1 className="about-banner-title">
            <span className="about-title-white">About</span>{' '}
            <span className="about-title-yellow">Scholars Abroad</span>
          </h1>
          <p className="about-banner-subtitle">
            Empowering dreams, building futures - Your trusted partner in international education
            <br />
            and immigration.
          </p>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="story-mission-section">
        <div className="story-mission-container">
          {/* Left: Our Story */}
          <div className="story-section">
            <h2 className="story-title">
              <span className="story-title-dark">Our</span>{' '}
              <span className="story-title-blue">Story</span>
            </h2>
            <div className="story-content">
              <p className="story-paragraph">
              As a reputable study abroad education consultant based in New Delhi, India, we have established strong relationships with numerous universities and educational institutions worldwide. Our success lies in the success of our students, and we take great pride in witnessing their achievements and the positive impact they make in their chosen fields.
              </p>
              {/* <p className="story-paragraph">
                Our mission is to bridge the gap between ambitious students and world-class educational opportunities. We believe that every student deserves access to quality education, regardless of geographical boundaries.
              </p> */}
            </div>
            <div className="story-buttons">
              <button className="story-btn-primary">Get Started Today</button>
              <button className="story-btn-secondary">Learn More</button>
            </div>
          </div>

          {/* Right: Our Mission Card */}
          <div className="mission-card">
            <div className="mission-icon-wrapper">
              <Target size={48} className="mission-icon" />
            </div>
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              To provide ethical, transparent, and personalized guidance that transforms educational aspirations into reality, ensuring every student finds their path to success.
            </p>
          </div>
        </div>
      </section>

      {/* Director's Message & Grow Your Vision Section */}
      <section className="director-vision-section">
        <div className="director-vision-container">
          {/* Left: Director's Message */}
          <div className="director-message-card">
            <div className="director-header">
              <div className="director-image-wrapper">
                {/* Replace this with actual director image */}
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" 
                  alt="Sakshi Lamba - Director" 
                  className="director-image"
                />
              </div>
              <div className="director-title-group">
                <h2 className="director-title">Director's Message</h2>
                <p className="director-name">Sakshi Lamba</p>
              </div>
            </div>
            <blockquote className="director-quote">
              "Welcome to Scholars Abroad Immigration Consultant, your trusted partner in the pursuit of study abroad opportunities. As the Director of Scholars Abroad Immigration Consultant, I am honoured to address you and share our vision and commitment to helping students like you realize their dreams of studying abroad.
I invite you to explore our website, where you will find valuable resources, and information about our services.
"
            </blockquote>
            {/* <p className="director-text">
              With over a decade of experience in international education consulting, I founded Scholars Abroad with the belief that every student deserves access to world-class education. Our commitment to ethical practices and personalized guidance has helped thousands of students achieve their dreams.
            </p> */}
          </div>

          {/* Right: Grow Your Vision */}
          <div className="vision-card">
            <h2 className="vision-title">Grow Your Vision</h2>
            <p className="vision-intro">
              Our approach goes beyond mere application assistance. We focus on:
            </p>
            <ul className="vision-list">
              <li className="vision-list-item">
                <div className="vision-check-icon">
                  <CheckCircle size={24} />
                </div>
                <span>Holistic career counselling and goal setting</span>
              </li>
              <li className="vision-list-item">
                <div className="vision-check-icon">
                  <CheckCircle size={24} />
                </div>
                <span>Long-term success and career development</span>
              </li>
              <li className="vision-list-item">
                <div className="vision-check-icon">
                  <CheckCircle size={24} />
                </div>
                <span>Continuous support throughout the journey</span>
              </li>
              <li className="vision-list-item">
                <div className="vision-check-icon">
                  <CheckCircle size={24} />
                </div>
                <span>Building global networks and opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="why-section">
        <div className="why-heading">
          <h2>
            Why Choose <span>Scholars Abroad</span>?
          </h2>
          <p>
          At Scholars Abroad Immigration Consultant, we are dedicated to empowering students to achieve their academic aspirations and realize their dreams of studying abroad. 
          </p>
          {/* <button className="why-pill">
            <span aria-hidden="true">⭐</span> Australia-Focused Experts
          </button> */}
        </div>

        <div className="why-grid">
          {australiaHighlights.map((feature) => (
            <article className="why-card" key={feature.title}>
              <div className="why-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;