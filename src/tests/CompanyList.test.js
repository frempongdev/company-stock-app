import { Provider, useSelector } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CompanyList from '../components/CompanyList';
import store from '../redux/store';

describe('CompanyList Snapshot', () => {
  it('renders CompanyList', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <CompanyList />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.mock('react-redux');

describe('CompanyList', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback({
      companies: {
        companies: [
          {
            symbol: 'AAPL',
            companyName: 'Apple Inc.',
            price: 145.44,
            isLoading: false,
          },
          {
            symbol: 'AMZN',
            companyName: 'Amazon.com Inc.',
            price: 3362.02,
            isLoading: false,
          },
        ],
      },
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('renders an h3 element with the classname "company-name"', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <CompanyList searchTerm="am" />
      </BrowserRouter>,
    );
    const companyElement = getByRole('heading', { name: /amzn/i });
    expect(companyElement).toHaveClass('company-name');
    expect(companyElement.tagName).toBe('H3');
  });

  it('renders a span element with the classname "stock-price"', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <CompanyList searchTerm="am" />
      </BrowserRouter>,
    );
    const companyElement = getByRole('heading', { name: /amzn/i });
    expect(companyElement.nextElementSibling).toHaveClass('stock-price');
    expect(companyElement.nextElementSibling.tagName).toBe('SPAN');
  });
});
