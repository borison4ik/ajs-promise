import GameSavingLoader from '../components/GameSavingLoader';
import read from '../components/reader';

jest.mock('../components/reader');

describe('GameSavingLoader', () => {
  test('should return a Error', async () => {
    read.mockRejectedValue(new Error('error from test'));
    expect(GameSavingLoader.load()).rejects.toThrow('error from test');
  });
});

describe('GameSavingLoader', () => {
  test('should return a object', async () => {
    const caseObj = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    expect(GameSavingLoader.load()).resolves.toEqual(caseObj);
  });
});
