import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import AddNewItem from '.';
import { store } from '../../../store';
import Theme from '../../../Theme';

const Wrapper = ({ children }) => (
  <Theme>
    <Provider store={store}>{children}</Provider>
  </Theme>
);

it('Add New List is displayed on button click', () => {
  const { queryByTestId, getByTestId } = render(<AddNewItem type="list" />, {
    wrapper: Wrapper,
  });

  expect(queryByTestId('new-item')).toBeNull();

  fireEvent.click(getByTestId('add-new-item'));

  expect(getByTestId('new-item')).toBeTruthy();
});
