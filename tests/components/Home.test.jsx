import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home.jsx';
import * as useOlympicHook from '../../src/hooks/useOlympic.js';

jest.mock('../../src/hooks/useOlympic.js');

describe('Home Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display loading state', () => {
    useOlympicHook.useOlympic.mockReturnValue({
      olympics: [],
      loading: true,
      error: null
    });

    render(<Home />);
    expect(screen.getByText(/Loading Olympic data/i)).toBeInTheDocument();
  });

  it('should display error state', () => {
    useOlympicHook.useOlympic.mockReturnValue({
      olympics: [],
      loading: false,
      error: new Error('Failed to fetch')
    });

    render(<Home />);
    expect(screen.getByText(/Error: Failed to fetch/i)).toBeInTheDocument();
  });

  it('should display olympics data', () => {
    const mockData = [
      {
        id: 1,
        country: 'France',
        participations: [
          {
            id: 1,
            year: 2012,
            city: 'Londres',
            medalsCount: 34,
            athleteCount: 330
          }
        ]
      }
    ];

    useOlympicHook.useOlympic.mockReturnValue({
      olympics: mockData,
      loading: false,
      error: null
    });

    render(<Home />);
    expect(screen.getByText(/Olympic Games App/i)).toBeInTheDocument();
    expect(screen.getByText(/1 countries data loaded/i)).toBeInTheDocument();
    expect(screen.getByText(/France/i)).toBeInTheDocument();
    expect(screen.getByText(/JO de Londres - 2012/i)).toBeInTheDocument();
  });
});
