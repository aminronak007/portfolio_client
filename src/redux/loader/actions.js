const LoaderActions = {
  FETCHING: "FETCHING",

  fetching: (value) => ({
    type: LoaderActions.FETCHING,
    isLoading: value,
  }),
};

export default LoaderActions;
