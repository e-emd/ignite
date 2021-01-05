import axios from 'axios';
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from '../api';

export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popularGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGameData = await axios.get(searchGameURL(game_name));

  dispatch({
    type: 'FETCH_SEARCH',
    payload: {
      searched: searchGameData.data.results,
    },
  });
};
