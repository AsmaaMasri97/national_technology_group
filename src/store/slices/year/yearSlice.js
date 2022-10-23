import { createSlice } from "@reduxjs/toolkit";
export const yearSlice = createSlice({
  name: "year",
  initialState: {
    yearList: [
      {
        id: 1,
        year: "First Year",
        subjects: [
          {
            id: 1,
            name_of_subjects: "Human Anatomy and Physiology",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Gary Cabrera",
                day_time: ["Monday – 08:00am", "Thursday – 02:00pm"],
              },
              {
                id: 2,
                name_of_teacher: "Stacy Logan",
                day_time: ["Monday – 10:00am", "Tuesday – 02:00pm"],
              },
              {
                id: 3,
                name_of_teacher: "Priscilla Phelps",
                day_time: ["Sunday – 10:00am"],
              },
            ],
          },
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
            id: 4,
            name_of_subjects: "Pharmaceutical Analysis",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Belen Fox",
                day_time: ["Thursday – 2:00pm"],
              },
              {
                id: 2,
                name_of_teacher: "Yadira Mcintyre",
                day_time: ["Sunday – 10:00am"],
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
      },
      {
        id: 2,
        year: "second Year",
        subjects: [
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
          {
            id: 2,
            name_of_subjects: "Pharmaceutical Microbiology",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Aliza Vance",
                day_time: ["Sunday – 10:00am"],
              },
              {
                id: 2,
                name_of_teacher: "Fisher Frederick",
                day_time: ["Monday – 02:00pm", "Tuesday – 02:00pm"],
              },
            ],
          },
          {
            id: 3,
            name_of_subjects: "Pharmaceutical Engineering",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Deandre Schroeder",
                day_time: ["Wednesday –02:00pm", "Tuesday – 10:00am"],
              },
              {
                id: 2,
                name_of_teacher: "Savannah Brooks",
                day_time: ["Wednesday 10:00am"],
              },
              {
                id: 3,
                name_of_teacher: "Elisabeth Nelson",
                day_time: ["Thursday – 02:00pm"],
              },
            ],
          },
          {
            id: 4,
            name_of_subjects: "Pharmaceutical Organic Chemistry",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Juliana Stevens",
                day_time: ["Thursday – 12:00pm"],
              },
              {
                id: 2,
                name_of_teacher: "Reagan Moss",
                day_time: ["Tuesday – 12:00pm"],
              },
            ],
          },
          {
            id: 5,
            name_of_subjects: "Medicinal Chemistry",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Drake Cisneros",
                day_time: ["Sunday – 12:00pm"],
              },
              {
                id: 2,
                name_of_teacher: "Reed Greer",
                day_time: ["Wednesday –10:00am", "Thursday – 12:00pm"],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        year: "Third Year",
        subjects: [
          {
            id: 1,
            name_of_subjects: "Industrial Pharmacy",
            teachers_names: [
              {
                id: 1,
                name_of_teacher: "Savannah Brooks",
                day_time: ["Monday – 12:00pm", "Thursday – 8:00am"],
              },
              {
                id: 2,
                name_of_teacher: "Reagan Moss",
                day_time: ["Tuesday – 02:00pm"],
              },
            ],
          },
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
      },
    ],
  },
  reducers: {
    setNewStudent: (state, action) => {
      state.students = action.payload;
    },
  },
  extraReducers: {},
});

export const dataYearSelector = (state) => state.year;
export const { setNewStudent } = yearSlice.actions;
export default yearSlice.reducer;
