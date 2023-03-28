import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/CompanyList.css';

const CompanyList = () => {
  const { companies } = useSelector((state) => state.companies);
  return (
    <div className="company-wrapper">
      {[...companies]
        .sort((a, b) => b.price - a.price)
        .map((company) => (company.isLoading ? (
          <div className="company-box" key={company.symbol}>
            <span className="load-message">loading Company details ... </span>
          </div>
        )
          : (
            <div className="company-box" key={company.symbol}>
              <Link to="/Profile">
                <button type="button" className="back">
                  more info
                  {' > '}
                </button>
              </Link>
              <h5 className="company-name">{company.companyName}</h5>
              <h6 className="company-name">{company.symbol}</h6>
              <span className="stock-price">
                $
                {company.price}
              </span>
            </div>
          )
        ))}
    </div>
  );
};
export default CompanyList;
