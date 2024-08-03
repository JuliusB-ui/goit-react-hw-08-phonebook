export const getContactsList = state => state.contacts.contactsList;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter= state => state.filter;

// login selectors
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectErrorMessage = state => state.auth.errorMessage;
