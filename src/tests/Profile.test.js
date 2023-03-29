import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
// import { configureMockStore } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';

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

  it('displays "Loading Company details..." when isLoading is true', () => {
    const mockStore = configureStore([thunk]);

    const store = mockStore({
      profile: {
        profile: [],
        isLoading: true,
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    const loadingMessage = getByText(/Loading Company details/i);
    expect(loadingMessage).toBeInTheDocument();
  });
});
