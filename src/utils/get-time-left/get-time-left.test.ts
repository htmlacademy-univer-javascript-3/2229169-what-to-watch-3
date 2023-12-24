import { getTimeLeft } from './get-time-left';

describe('Get time left', () => {
  it('return left time in fotmat "-mm:ss"', () => {
    const mockTimeInSeconds = 100;
    const expectedTimeLeft = '-01:40';

    const result = getTimeLeft(mockTimeInSeconds);

    expect(result).toBe(expectedTimeLeft);
  });
});
