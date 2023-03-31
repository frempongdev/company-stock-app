import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Companies from '../components/Companies';
import store from '../redux/store';

describe('Companies Snapshot', () => {
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

describe('Companies', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Companies />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('should render the search input', () => {
    const searchInputElement = component.getByPlaceholderText('Search...');
    expect(searchInputElement).toBeInTheDocument();
  });

  it('should render the back to top button', () => {
    const backButtonElement = component.getByText('^Back to top^');
    expect(backButtonElement).toBeInTheDocument();
  });
});
