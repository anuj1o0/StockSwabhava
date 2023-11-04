import React from 'react';
import "./whyus.css";
import Image1 from "./image1.jpg";
import Image2 from "./image2.jpg";
import Image3 from "./image3.jpg";

const WhyChooseUs = () => {
  const cards = [
    {
      image: Image1, // Replace with your image URL
      title: 'Sentiment-Driven Recommendations',
      description: 'Our platform uses sentiment analysis to provide stock recommendations tailored to your emotions.',
    },
    {
      image: Image2, // Replace with your image URL
      title: 'User-Friendly Interface',
      description: 'We offer an intuitive and easy-to-use interface for hassle-free stock trading.',
    },
    {
      image: Image3, // Replace with your image URL
      title: 'Real-time Market Data',
      description: 'Access up-to-date market data and insights to make informed investment decisions.',
    },
    // Add more cards as needed
  ];

  return (
    <div className="why-choose-us">
      <div className="heading">
        <h2>Why Choose Stock Sambhavna..?</h2>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={`Card ${index}`} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
