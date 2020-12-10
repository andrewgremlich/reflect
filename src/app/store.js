import { configureStore } from "@reduxjs/toolkit";

import privateRouteReducer from "../features/PrivateRoute/PrivateRoute.slice";
import navReducer from "../features/Nav/Nav.slice";

import administrationReducer from "../features/Administration/Administration.slice";
import exercisesTableReducer from "../features/ExercisesTable/ExercisesTable.slice";
import exerciseSetsTableReducer from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";
import programsTableReducer from "../features/ProgramsTable/ProgramsTable.slice";

import viewerSlice from "../features/Viewer/Viewer.slice";

const APP_LOCAL_STORAGE_KEY = "previousAppState";

const parsedPreviousAppState =
  localStorage[APP_LOCAL_STORAGE_KEY] &&
  JSON.parse(localStorage[APP_LOCAL_STORAGE_KEY]);

const storeConfig = {
  reducer: {
    protectedRoute: privateRouteReducer,
    navigation: navReducer,
    administration: administrationReducer,
    programsTable: programsTableReducer,
    exercisesTable: exercisesTableReducer,
    exerciseSetsTable: exerciseSetsTableReducer,
    viewer: viewerSlice,
  },
  preloadedState: parsedPreviousAppState,
};

const store = configureStore(storeConfig);

window.addEventListener("beforeunload", (evt) => {
  const previousAppState = store.getState();
  localStorage[APP_LOCAL_STORAGE_KEY] = JSON.stringify(previousAppState);
});

export default store;
