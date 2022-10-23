import { createSlice } from "@reduxjs/toolkit";
export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: "1",
        idOfYear: 1,
        first_name: "Amad",
        last_name: "Mohammad",
        year: "First Year",
        gender: "Male",
        infoOfSubjects: [
          {
            id: 2,
            name_of_subjects: "Pharmaceutics",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Aliza Vance",
                day_time: ["Sunday – 12:00"],
              },
              {
                id: 2,
                name_of_teacher: "Priscilla Phelps",
                day_time: ["Monday – 12:00am ", "Tuesday – 02:00pm"],
              },
            ],
          },
          {
            id: 3,
            name_of_subjects: "Remedial Biology",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Averie Carter",
                day_time: ["Sunday – 02:00pm", "Tuesday – 12:00pm"],
              },
              {
                id: 2,
                name_of_teacher: "Savannah Brooks",
                day_time: ["Wednesday 12:00pm"],
              },
            ],
          },
          {
            id: 5,
            name_of_subjects: "Pharmaceutical Inorganic Chemistry",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Grayson Stout",
                day_time: ["Sunday – 02:00pm"],
              },
              {
                id: 2,
                name_of_teacher: "Yadira Mcintyre",
                day_time: ["Monday – 10:00am", "Thursday – 02:00pm"],
              },
            ],
          },
        ],
        infoOfStudentProgram: [],
      },
      {
        id: 2,
        idOfYear: 2,
        first_name: "Asmaa",
        last_name: "Masri",
        year: "second Year",
        gender: "Female",
        infoOfSubjects: [
          {
            id: 1,
            name_of_subjects: "Physical Pharmaceutics",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Maurice Phillips",
                day_time: ["Monday – 10:00am", "Thursday – 12:00pm"],
              },
              {
                id: 2,
                name_of_teacher: "Ayaan Herring",
                day_time: ["Monday – 08:00am", "Tuesday – 02:00pm"],
              },
              {
                id: 3,
                name_of_teacher: "Deon Farrell",
                day_time: ["Sunday – 12:00pm"],
              },
            ],
          },
        ],
        infoOfStudentProgram: [],
      },
      {
        id: 3,
        idOfYear: 3,
        first_name: "Lona ",
        last_name: "Ali",
        year: "Third Year",
        gender: "Female",
        infoOfSubjects: [
          {
            id: 2,
            name_of_subjects: "Medicinal Chemistry",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Grayson Stout",
                day_time: ["Sunday – 10:00am"],
              },
              {
                id: 2,
                name_of_teacher: "Ayaan Herring",
                day_time: ["Monday – 10:00am", "Tuesday – 12:00pm"],
              },
            ],
          },
        ],
        infoOfStudentProgram: [],
      },
    ],
  },
  reducers: {
    setNewStudent: (state, action) => {
      console.log("add");
      console.log(action.payload);
      state.students.push(action.payload);
    },
    setUpdateStudent: (state, action) => {
      console.log("update");
      console.log(action.payload);
      state.students = action.payload;
    },
    setIdOfSelect: (state, action) => {
      state.idOfSelect[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: {},
});

export const dataStudentSelector = (state) => state.student;
export const { setNewStudent, setUpdateStudent, setIdOfSelect } =
  studentSlice.actions;
export default studentSlice.reducer;
