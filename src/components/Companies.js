import React from 'react';
import CompanyList from './CompanyList';

const Companies = () => (
  <div className="main">
    <button type="button" className="back">back</button>
    <div className="company-box">
      <CompanyList />
    </div>
  </div>
);

export default Companies;
