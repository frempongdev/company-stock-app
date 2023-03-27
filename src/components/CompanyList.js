import React from 'react';
import { useSelector } from 'react-redux';

const CompanyList = () => {
  const { companies } = useSelector((state) => state.companies);
  return (
    <div>
      {companies
        // .sort((a, b) => a.price - b.price)
        .map((company) => (company.isLoading ? (
          <span className="load-message">loading Company details ... </span> // eslint-disable-line react/jsx-key
        )
          : (
            <div className="country-box" key={company.symbol}>
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
