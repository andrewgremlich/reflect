import { configureStore } from "@reduxjs/toolkit";

import exerciseGroupsTableReducer from "../features/ExerciseGroupsTable/ExerciseGroupsTable.slice";
import programsTableReducer from "../features/ProgramsTable/ProgramsTable.slice";
import privateRouteReducer from "../features/PrivateRoute/PrivateRoute.slice";
import navReducer from "../features/Nav/Nav.slice";
import administrationReducer from "../features/Administration/Administration.slice";
import exercisesTableReducer from "../features/ExercisesTable/ExercisesTable.slice";

export default configureStore({
  reducer: {
    protectedRoute: privateRouteReducer,
    navigation: navReducer,
    administration: administrationReducer,
    programsTable: programsTableReducer,
    exerciseGroupsTable: exerciseGroupsTableReducer,
    exercisesTable: exercisesTableReducer,
  },
});
