import LoaderActions from "./actions";

const initState = {
  isLoading: false,
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case LoaderActions.FETCHING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
}
