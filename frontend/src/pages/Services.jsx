import React from "react";
import "../styles/services.css";
import { GraduationCap, Users, FileText, Plane, DollarSign, Globe } from 'lucide-react';

const servicesData = [
  {
    title: 'Study Abroad Counselling',
    desc: 'Personalized counselling sessions to understand your goals, assess your profile, and create a customized roadmap for your international education journey.',
    bullets: ['One-on-one consultation', 'Profile assessment', 'Goal setting', 'Career guidance'],
    icon: <GraduationCap />,
    color: '#2563eb'
  },
  {
    title: 'University Selection',
    desc: 'Expert guidance in selecting the right universities and programs based on your academic background, budget, and career aspirations.',
    bullets: ['University matching', 'Program selection', 'Ranking analysis', 'Budget planning'],
    icon: <Users />,
    color: '#f59e0b'
  },
  {
    title: 'Application Assistance',
    desc: 'Complete support in preparing and submitting applications, including SOPs, recommendation letters, and all required documentation.',
    bullets: ['SOP writing', 'Document preparation', 'Application review', 'Submission support'],
    icon: <FileText />,
    color: '#ef4444'
  },
  {
    title: 'Visa Guidance',
    desc: 'Comprehensive visa assistance including documentation, interview preparation, and ongoing support throughout the visa process.',
    bullets: ['Visa documentation', 'Interview prep', 'Application tracking', 'Updates & support'],
    icon: <Plane />,
    color: '#2563eb'
  },
  {
    title: 'Financial Aid & Scholarships',
    desc: 'Assistance in finding and applying for scholarships, grants, and financial aid opportunities to make education affordable.',
    bullets: ['Scholarship search', 'Application help', 'Financial planning', 'Aid optimization'],
    icon: <DollarSign />,
    color: '#f59e0b'
  },
  {
    title: 'Pre & Post Arrival Support',
    desc: 'Comprehensive support from pre-departure briefings to post-arrival assistance, ensuring a smooth transition to your new country.',
    bullets: ['Pre-departure briefing', 'Accommodation help', 'Local guidance', 'Ongoing support'],
    icon: <Globe />,
    color: '#ef4444'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    desc: 'Understand your goals and assess your profile'
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    desc: 'Create customized roadmap and timeline'
  },
  {
    number: '03',
    title: 'Application & Documentation',
    desc: 'Prepare and submit all required documents'
  },
  {
    number: '04',
    title: 'Success & Support',
    desc: 'Visa approval and post-arrival assistance'
  }
];

const destinations = [
  {
    country: 'Australia',
    flag: '🇦🇺',
    courses: ['Engineering', 'Business', 'IT', 'Medicine', 'Arts'],
    desc: 'World-class universities, work opportunities, beautiful lifestyle'
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    courses: ['Business', 'Healthcare', 'Engineering','IT'],
    desc: 'Immigration-friendly policies, high quality of life, diverse culture'
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    courses: ['Finance', 'Law', 'Medicine','Engineering'],
    desc: 'Prestigious institutions, rich heritage, gateway to Europe'
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    courses: ['MBA', 'Computer Science', 'Medicine', 'Research'],
    desc: 'Top-ranked universities, innovation hub, career opportunities'
  },
  {
    country: 'New Zealand',
    flag: '🇳🇿',
    courses: ['Agriculture', 'Tourism', 'IT', 'Business'],
    desc: 'Safe environment, practical learning, post-study options'
  },
  {
    country: 'Dubai, UAE',
    flag: '🇦🇪',
    courses: ['Business', 'Hospitality', 'Engineering', 'Medicine'],
    desc: 'Global hub, tax-free earnings, multicultural exposure'
  },
  {
    country: 'Singapore',
    flag: '🇸🇬',
    courses: ['Finance', 'Technology', 'Business', 'Engineering'],
    desc: 'Cutting-edge curriculum, strategic location, industry ties'
  },
  {
    country: 'Malta',
    flag: '🇲🇹',
    courses: ['Gaming', 'Finance', 'Tourism', 'IT'],
    desc: 'Affordable education, EU access, relaxed lifestyle'
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="about-banner">
        <div className="about-banner-content">
          <h1 className="about-banner-title">
            <span className="about-title-white">Our</span>{" "}
            <span className="about-title-yellow">Services</span>
          </h1>
          <p className="about-banner-subtitle">
            Comprehensive support for every step of your international
            <br />
            education journey.
          </p>
        </div>


      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="services-title">Complete Study Abroad Solutions</h2>
          <p className="services-subtitle">From initial counselling to post-arrival support, we guide you through every step of your journey.</p>

          <div className="services-grid">
            {servicesData.map((s, idx) => (
              <article
                key={s.title}
                className="service-card"
                style={{ animationDelay: `${idx * 120}ms` }}
                aria-labelledby={`svc-${idx}`}
              >
                <div className="service-icon" style={{ borderColor: s.color }}>
                  {React.cloneElement(s.icon, { size: 32, color: s.color, strokeWidth: 1.5 })}
                </div>
                <h3 id={`svc-${idx}`} className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-list">
                  {s.bullets.map((b) => (
                    <li key={b} className="service-list-item">{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      <section className="destinations-section">
        <div className="container">
          <h2 className="destinations-title">Study Destinations</h2>
          <p className="destinations-subtitle">
            Explore top study destinations and popular courses across the globe.
          </p>

          <div className="destinations-grid services-destinations-grid">
            {destinations.map((destination) => (
              <article key={destination.country} className="destination-card services-destination-card">
                <div className="destination-card-top services-destination-card-top">
                  <span className="destination-flag services-destination-flag" aria-hidden="true">
                    {destination.flag}
                  </span>
                  <h3>{destination.country}</h3>
                </div>
                <div className="services-destination-card-body">
                  <p className="services-destination-label">Popular Courses:</p>

                  <div className="services-destination-tags">
                    {destination.courses.map((course) => (
                      <span key={course} className="services-course-chip">
                        {course}
                      </span>
                    ))}
                  </div>

                  <p className="services-destination-desc">
                    {destination.desc}
                  </p>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="process-title">Our Process</h2>
          <p className="process-subtitle">
            A systematic approach to ensure your success at every step.
          </p>

          <div className="process-container">
            <div className="process-cards-wrapper">
              {processSteps.map((step, idx) => (
                <div
                  key={step.number}
                  className="process-card"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="process-number">{step.number}</div>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="process-connector-line"></div>
          </div>
        </div>
      </section>


      {/* <section className="why-section">
        <div className="why-heading">
          <h2>
            Why Choose <span>Scholars Abroad</span>?
          </h2>
          <p>
          At Scholars Abroad Immigration Consultant, we are dedicated to empowering students to achieve their academic aspirations and realize their dreams of studying abroad. 
          </p>
        </div>
      </section> */}

      {/* Services Grid Section */}

    </div>

  );
};
export default Services;
