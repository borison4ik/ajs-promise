import json from '../components/parser';
import read from '../components/reader';

describe('json function: ', () => {
  const jsonCase =
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  test('should return json from arrayBufer', async () => {
    const buffer = await read();
    const jsonTest = await json(buffer);
    await expect(jsonTest).toBe(jsonCase);
  });
});
