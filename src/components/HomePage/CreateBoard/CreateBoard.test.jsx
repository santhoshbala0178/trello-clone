import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import Theme from '../../../Theme';
import CreateBoard from './CreateBoard';

const Wrapper = ({ children }) => (
  <Theme>
    <Provider store={store}>{children}</Provider>
  </Theme>
);

it('Create Board Popup is displayed on Create New Board button click', () => {
  const onClick = jest.fn();
  const { queryByTestId, getByTestId } = render(
    <CreateBoard onClick={onClick} />,
    { wrapper: Wrapper }
  );

  expect(queryByTestId('create-board')).toBeTruthy();

  fireEvent.click(getByTestId('create-board'));
});
