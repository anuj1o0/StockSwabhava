import React from 'react';
import './whyus.css';

import { FaLightbulb, FaUser, FaChartLine, FaGlobe, FaDollarSign, FaBalanceScale } from 'react-icons/fa';


const WhyChooseUs = () => {

  

  const cards = [
    {
      icon: FaLightbulb,
      title: 'Innovative Solutions',
      description: 'Our platform offers innovative solutions for smart investing.',
    },
    {
      icon: FaUser,
      title: 'User-Centric Design',
      description: 'We prioritize user experience and provide an intuitive interface.',
    },
    {
      icon: FaChartLine,
      title: 'Data-Driven Insights',
      description: 'Access real-time market data and analytics for informed decisions.',
    },
    {
      icon: FaGlobe,
      title: 'Global Reach',
      description: 'Explore investment opportunities worldwide with our global reach.',
    },
    {
      icon: FaDollarSign,
      title: 'Risk Tolerance',
      description: 'Tailored investment options based on your risk tolerance.',
    },
    {
      icon: FaBalanceScale,
      title: 'Long-Term Investments',
      description: 'Plan for the future with long-term investment strategies.',
    },
  ];

  return (
    <div className="why-choose-us">
      <div className="heading">
        <h2>Why Choose Stock Sambhavna..?</h2>
      </div>
      
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">
              {renderIcon(card.icon)}
              <div className="description">
                <p>{card.description}</p>
              </div>
            </div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderIcon = (IconComponent) => <IconComponent size={64} color="#E5C3A6" />;

export default WhyChooseUs;
