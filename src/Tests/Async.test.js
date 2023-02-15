import { render, screen } from '@testing-library/react';
import Async from '../mocks/Async';

describe('Get Information from API', () => {
  test('renders population in Palestine if request succeeds using mocks', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          name: 'Palestine',
          population: 4803269,
        },
      ],
    });

    render(<Async />);

    // must use find with async code, because it's return a promise
    const population = await screen.findByText('4803269');

    expect(population).toBeInTheDocument();
  });

  test('Check if the list is not empty if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          name: 'Palestine',
          population: 4803269,
        },
      ],
    });

    render(<Async />);

    const listItems = await screen.findAllByRole('listitem');

    expect(listItems).not.toHaveLength(0);
  });
});
