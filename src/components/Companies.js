import React, { useState } from 'react';
import CompanyList from './CompanyList';
import '../styles/Companies.css';

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="main">
      <div className="main-top">
        <input type="text" className="search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <br />
        <h4 className="header">World&rsquo;s Most Valuable Company Stocks</h4>
      </div>
      <div className="company-box">
        <CompanyList searchTerm={searchTerm} />
        <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>^Back to top^</button>
      </div>
    </div>
  );
};

export default Companies;
