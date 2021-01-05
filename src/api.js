import moment from 'moment';

const base_url = 'https://api.rawg.io/api/';

const dateFormatted = () => {
  return moment(new Date()).format('YYYY-MM-DD');
};

const currentDate = dateFormatted();
const lastYear = moment(currentDate).subtract(1, 'years').format('YYYY-MM-DD');
const nextYear = moment(currentDate).add(1, 'years').format('YYYY-MM-DD');
const lastMonth = moment(currentDate)
  .subtract(1, 'months')
  .format('YYYY-MM-DD');

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastMonth},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const gameDetailsURL = (gameId) => `${base_url}games/${gameId}`;
export const gameScreenshotURL = (gameId) =>
  `${base_url}games/${gameId}/screenshots`;
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=8`;
