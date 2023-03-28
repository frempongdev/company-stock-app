import React, { useState } from 'react';
import CompanyList from './CompanyList';

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="main">
      <h5 className="header">World&rsquo;s Most Valuable Company Stocks</h5>
      <input type="text" className="search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="company-box">
        <CompanyList searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default Companies;
