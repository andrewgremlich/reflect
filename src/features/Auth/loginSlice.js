import { createSlice } from "@reduxjs/toolkit";
import netlifyIdentity from "netlify-identity-widget";

window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

const user = netlifyIdentity.currentUser();

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: user?.email ? true : false,
    userEmail: user?.email ? user.email : null,
    userRoles: user?.app_metadata.roles ? user.app_metadata.roles : null,
  },
  reducers: {
    setEmail: (state, { payload }) => {
      state.userEmail = payload ? payload : null;
    },
    setRoles: (state, { payload }) => {
      state.userRoles = payload.length > 0 ? payload : [];
    },
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    unsetEmail: (state) => {
      state.userEmail = null;
    },
    unsetUserRoles: (state) => {
      state.userRoles = null;
    },
    unauthenticate: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const {
  setEmail,
  setRoles,
  authenticate,
  unsetEmail,
  unsetUserRoles,
  unauthenticate,
} = loginSlice.actions;

export const authenticateUser = () => (dispatch) => {
  netlifyIdentity.on("login", (user) => {
    dispatch(setEmail(user.email));
    dispatch(setRoles(user.app_metadata.roles));
    dispatch(authenticate());
  });
  netlifyIdentity.open();
};

export const signoutUser = () => (dispatch) => {
  netlifyIdentity.logout();
  dispatch(unsetEmail());
  dispatch(unsetUserRoles());
  dispatch(unauthenticate());
};

export const selectLogin = (state) => state.login;

export default loginSlice.reducer;
