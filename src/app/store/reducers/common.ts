export const request = (state: any) => ({ ...state, loading: true });

export const requestError = (state: any, { error }: any) => {
  console.error(error);

  return {
    ...state,
    loading: false,
    error,
  };
};
