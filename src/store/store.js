import { configureStore } from "@reduxjs/toolkit";
import { studentSlice } from "./slices/student/studentSlice";
import { yearSlice } from "./slices/year/yearSlice";

export default configureStore({
  reducer: {
    student: studentSlice.reducer,
    year: yearSlice.reducer,
  },
});
