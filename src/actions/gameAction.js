import axios from 'axios';
import { popularGamesURL } from '../api';

export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: { popularGames: popularGamesData.data.results },
  });
};
