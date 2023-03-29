import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Companies from '../components/Companies';
import store from '../redux/store';

describe('Companies', () => {
  it('renders Companies', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Companies />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
