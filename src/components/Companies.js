import React from 'react';
import CompanyList from './CompanyList';

const Companies = () => (
  <div className="main">
    <h5 className="header">World&rsquo;s Most Valuable Company Stocks</h5>
    {/* <button type="button" className="back">back</button> */}
    <input type="text" className="search" placeholder="Search..." />
    <div className="company-box">
      <CompanyList />
    </div>
  </div>
);

export default Companies;
