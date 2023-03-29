import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import store from '../redux/store';

describe('Navbar', () => {
  it('renders Navbar', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
