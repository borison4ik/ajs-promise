import GameSavingLoader from './js/components/GameSavingLoader';
import GameSavingLoaderAsync from './js/components/GameSavingLoaderAsync';

GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.log('error', error.message);
  },
);

GameSavingLoaderAsync.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.log('error', error.message);
  },
);
