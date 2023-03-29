import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CompanyList from '../components/CompanyList';
import store from '../redux/store';

describe('CompanyList', () => {
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
