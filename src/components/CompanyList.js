import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import '../styles/CompanyList.css';

const CompanyList = ({ searchTerm }) => {
  const { companies } = useSelector((state) => state.companies);

  const filteredCompanies = companies.filter((company) => (
    company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
       || company.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  ));
  return (
    <div className="company-wrapper">

      {[...filteredCompanies]
        .sort((a, b) => b.price - a.price)
        .map((company, index) => (company.isLoading ? (
          <div className="company-box" key={company.symbol}>
            <span className="load-message">loading Company details ... </span>
          </div>
        )
          : (
            <>
              <div className="company-box" key={company.symbol}>
                <div className="box-top">
                  <h3 className="rank">{index + 1}</h3>
                  <Link to={`/Profile/${company.symbol}`}>
                    <button type="button" className="back">
                      more
                      {' > '}
                    </button>
                  </Link>
                </div>
                <h3 className="company-name">{company.symbol}</h3>
                <span className="stock-price">
                  $
                  {company.price}
                </span>
                <h5 className="company-name">{company.companyName}</h5>
              </div>
            </>
          )
        ))}
    </div>
  );
};

CompanyList.propTypes = {
  searchTerm: PropTypes.string,
};

CompanyList.defaultProps = {
  searchTerm: '',
};
export default CompanyList;
