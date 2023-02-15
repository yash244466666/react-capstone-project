import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

it('renders correctly', () => {
  const Countries = renderer
    .create(
      <Provider store={store}><App /></Provider>,
    )
    .toJSON();
  expect(Countries).toMatchSnapshot();
});
