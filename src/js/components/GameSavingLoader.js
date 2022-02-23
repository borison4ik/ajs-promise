import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((data) => {
        json(data).then((jsonData) => {
          try {
            resolve(JSON.parse(jsonData));
          } catch (e) {
            reject(e);
          }
        });
      });
    });
  }
}
