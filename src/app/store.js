import { configureStore } from "@reduxjs/toolkit";

import navReducer from "../features/Nav/Nav.slice";

import administrationReducer from "../features/Administration/Administration.slice";
import exercisesTableReducer from "../features/ExercisesTable/ExercisesTable.slice";
import setsTableReducer from "../features/SetsTable/SetsTable.slice";
import programsTableReducer from "../features/ProgramsTable/ProgramsTable.slice";

import viewerSlice from "../features/Viewer/Viewer.slice";

const APP_LOCAL_STORAGE_KEY = "previousAppState";

// const parsedPreviousAppState =
//   localStorage[APP_LOCAL_STORAGE_KEY] &&
//   JSON.parse(localStorage[APP_LOCAL_STORAGE_KEY]);

const storeConfig = {
  reducer: {
    navigation: navReducer,
    administration: administrationReducer,
    programsTable: programsTableReducer,
    exercisesTable: exercisesTableReducer,
    exerciseSetsTable: setsTableReducer,
    viewer: viewerSlice,
  },
  // preloadedState: parsedPreviousAppState || undefined,
};

const store = configureStore(storeConfig);

// window.addEventListener("beforeunload", (evt) => {
//   const previousAppState = store.getState();
//   localStorage[APP_LOCAL_STORAGE_KEY] = JSON.stringify(previousAppState);
// });

export default store;
