import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import Profile from '../components/Profile';
import store from '../redux/store';

describe('Profile', () => {
  it('renders Profile', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Profile />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders company name and location', async () => {
    const history = createMemoryHistory();
    history.push('/Profile/COMP');

    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Loading Company details...')).toBeInTheDocument();

    // Wait for loading to finish
    await screen.findByText('Company Overview');

    expect(screen.getByText('Company Name')).toBeInTheDocument();
    expect(screen.getByText('Company Location')).toBeInTheDocument();
  });
});
