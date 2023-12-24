import { getRunTime } from './get-run-time';

describe('Get tun time', () => {
  it('return run time film in format "h:mm"', () => {
    const mockRunTime = 134;
    const expectedRunTime = '2:14';

    const result = getRunTime(mockRunTime);

    expect(result).toBe(expectedRunTime);
  });
});
