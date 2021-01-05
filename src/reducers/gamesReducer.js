const initState = {
  popularGames: [],
  upcomingGames: [],
  newGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popularGames: action.payload.popularGames,
        upcomingGames: action.payload.upcomingGames,
        newGames: action.payload.newGames,
      };
    case 'FETCH_SEARCH':
      return {
        ...state,
        searched: action.payload.searched,
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
