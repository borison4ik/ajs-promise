import GameSaving from '../components/GameSaving';

describe('GameSaving', () => {
  const cases = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  test('to equal obj returned', () => {
    expect(new GameSaving(cases)).toEqual(cases);
  });
});
