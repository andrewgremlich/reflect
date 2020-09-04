import { configureStore } from "@reduxjs/toolkit";

import programsTableReducer from "../features/ProgramsTable/programsTableSlice";
import protectedRouteReducer from "../features/PrivateRoute/protectedRouteSlice";
import navReducer from "../features/Nav/navSlice";

export default configureStore({
  reducer: {
    protectedRoute: protectedRouteReducer,
    navigation: navReducer,
    programsTable: programsTableReducer,
  },
});
