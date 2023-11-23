// CategoryCard Component
import React from 'react';

const CategoryCard = ({ title }) => {
  // Replace this with actual data about the best stocks for the category
  const stocks = [
    { name: 'Stock 1', info: 'Info about Stock 1' },
    { name: 'Stock 2', info: 'Info about Stock 2' },
    // Add more stock data as needed
  ];

  return (
    <div style={{ border: '1px solid #ccc', width: '200px', padding: '10px', margin: '10px' }}>
      <h2>{title}</h2>
      {/* Display information about best stocks */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {stocks.map((stock, index) => (
          <div key={index} style={{ border: '1px solid #eee', padding: '5px', margin: '5px' }}>
            <p>{stock.name}</p>
            <p>{stock.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
