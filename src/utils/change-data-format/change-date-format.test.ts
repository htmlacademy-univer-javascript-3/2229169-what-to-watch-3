import { getDate, getDateTime } from './change-date-format';

describe('Change date format', () => {
  const mockDate = '2023-11-22T17:00:00.277Z';

  it('return date in format "YYYY-MM-DD" with getDateTime', () => {
    const expectedDate = '2023-11-22';

    const result = getDateTime(mockDate);

    expect(result).toBe(expectedDate);
  });

  it('return date in format "" with getDate', () => {
    const expectedDate = 'November 22, 2023';

    const result = getDate(mockDate);

    expect(result).toBe(expectedDate);
  });
});
