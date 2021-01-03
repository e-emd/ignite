import moment from 'moment';

const base_url = 'https://api.rawg.io/api/';

const dateFormatted = () => {
  return moment(new Date()).format('YYYY-MM-DD');
};

const currentDate = dateFormatted();
console.log(currentDate);
const lastYear = moment(currentDate).subtract(1, 'years').format('YYYY-MM-DD');
const nextYear = moment(currentDate).add(1, 'years').format('YYYY-MM-DD');

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
