const initialState = {
  game: { platforms: [] },
  screenshots: { results: [] },
  isLoading: false,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAILS':
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case 'LOADING_DETAIL':
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailReducer;
