import { configureStore } from "@reduxjs/toolkit";

import programsTableReducer from "../features/ProgramsTable/ProgramsTable.slice";
import privateRouteReducer from "../features/PrivateRoute/PrivateRoute.slice";
import navReducer from "../features/Nav/Nav.slice";
import administrationReducer from "../features/Administration/Administration.slice";
import exercisesTableReducer from "../features/ExercisesTable/ExercisesTable.slice";
import exerciseSetsTableReducer from "../features/ExerciseSetsTable/ExerciseSetsTable.slice";

export default configureStore({
  reducer: {
    protectedRoute: privateRouteReducer,
    navigation: navReducer,
    administration: administrationReducer,
    programsTable: programsTableReducer,
    exercisesTable: exercisesTableReducer,
    exerciseSetsTable: exerciseSetsTableReducer,
  },
});
