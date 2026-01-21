import { renderHook, waitFor } from '@testing-library/react';
import { useOlympic } from '../../src/hooks/useOlympic.js';
import * as olympicService from '../../src/services/olympicService.js';

jest.mock('../../src/services/olympicService.js');

describe('useOlympic', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch olympics successfully', async () => {
    const mockData = [
      {
        id: 1,
        country: 'France',
        participations: []
      }
    ];
    olympicService.fetchOlympics.mockResolvedValue(mockData);

    const { result } = renderHook(() => useOlympic());

    expect(result.current.loading).toBe(true);
    expect(result.current.olympics).toEqual([]);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.olympics).toEqual(mockData);
      expect(result.current.error).toBeNull();
    });
  });

  it('should handle fetch error', async () => {
    const mockError = new Error('Fetch failed');
    olympicService.fetchOlympics.mockRejectedValue(mockError);

    const { result } = renderHook(() => useOlympic());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.olympics).toEqual([]);
      expect(result.current.error).toEqual(mockError);
    });
  });
});
