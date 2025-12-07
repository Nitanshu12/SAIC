import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import image from "../assets/image.png";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "5K+", label: "Students Guided" },
];

const australiaHighlights = [
  {
    title: "Study in Australia",
    description:
      "Premium education with world-class universities and excellent post-study opportunities.",
    icon: "🎓",
  },
  {
    title: "Visa Assistance",
    description:
      "Expert support for student visas with high success rates across all destinations.",
    icon: "🛂",
  },
  {
    title: "Scholarship Guidance",
    description:
      "Find and apply for scholarships, including exclusive Australian programs.",
    icon: "🎖️",
  },
  {
    title: "Global Universities",
    description:
      "Access to 500+ universities worldwide with a special focus on Australian institutions.",
    icon: "🌐",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">
            Helping You Build a <span>Better Tomorrow</span>
          </h1>
          <p className="hero-description">
            Personalized guidance for study visas, global university admissions.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => navigate('/contact')}>Book a Consultation</button>
            <button className="secondary-btn" onClick={() => navigate('/services')}>Explore Programs</button>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="who-section">
        <div className="who-card">
          <div className="who-image">
            <img
              src={image}
              alt="Family consulting advisor"
            />
          </div>
          <div className="who-content">
            <p className="section-label">Who We Are</p>
            <h2>Your Trusted Partner in Global Education</h2>
            <p>
              Scholars Abroad is a premier education and immigration consultancy
              dedicated to empowering students to achieve their academic and
              career goals. We provide comprehensive guidance for study abroad
              counseling, seamless application and visa support, and settlement
              planning to ensure a confident transition into your new chapter.
            </p>
            <button className="link-btn" onClick={() => navigate('/about')}>
              Learn More <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

      </section>

      <section className="why-section">
        <div className="why-heading">
          <h2>
            Why Choose <span>Australia</span> for Your Studies?
          </h2>
          <p>
            Australia offers world-class education, post-study work opportunities,
            a welcoming multicultural environment, and exceptional quality of life.
            As destination specialists, we also guide students to other leading hubs
            worldwide.
          </p>
          <button className="why-pill">
            <span aria-hidden="true">⭐</span> Australia-Focused Experts
          </button>
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
      <section className="destinations-section">
        <div className="destinations-header">
          <p className="section-label">Top Destinations</p>
          <h2>Explore Your Dream Country</h2>
          <p>
            We have strong partnerships with universities in the world&apos;s
            top educational hubs.
          </p>
        </div>

        <div className="destinations-grid">
          {[
            {
              label: "Australia",
              image:
                "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?auto=format&fit=crop&w=1200&q=80",
            },
            {
              label: "Canada",
              image:
                "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?auto=format&fit=crop&w=1200&q=80",
            },
            {
              label: "UK",
              image:
                "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
            },
            {
              label: "USA",
              image:
                "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
            },
          ].map((destination) => (
            <article className="destination-card" key={destination.label}>
              <img src={destination.image} alt={destination.label} />
              <div className="destination-overlay" />
              <div className="destination-label">
                <span />
                <p>{destination.label}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="destinations-footnote">
          And many more including Dubai, Singapore, Malta &amp; New Zealand.
        </p>
      </section>
    </main>
  );
}

export default Home;
