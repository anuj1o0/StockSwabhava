// Main Component (InvestorSwabhav)
import React from 'react';
import CategoryCard from './CategoryCard';
import "./low.css"

const InvestorSwabhav = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'right' }}>Investor Swabhav</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <CategoryCard title="Recurring Deposits" />
        <CategoryCard title="Fixed Deposits" />
        <CategoryCard title="Gold" />
        <CategoryCard title="Bonds" />
      </div>
    </div>
  );
};

export default InvestorSwabhav;
