import React, { useEffect, useState } from "react";
import { yearList } from "../../store/data/data";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  dataStudentSelector,
  setNewStudent,
  setUpdateStudent,
} from "../../store/slices/student/studentSlice";
import { useNavigate } from "react-router-dom";
import "./addNewStudent.css";
import { useParams } from "react-router-dom";
function UpdateInfoOfStudent() {
  const dispatchUpdateStudentInfo = useDispatch();
  var navigate = useNavigate();
  var navigate_home = useNavigate();
  const params = useParams();
  const { students } = useSelector(dataStudentSelector);
  const [idOfYear, setIdOfYear] = useState(1);
  const [selectOption, setSelectedOptin] = useState([]);
  const [dateId, setDateID] = useState([1, 1, 1, 1, 1]);
  const [selectedteacher, setSelectedTeacher] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [subjectsProgram, setSubjectsProgram] = useState([]);
  const [oldForm, setOldForm] = useState(students[params.id - 1]);
  const [studentForm, setStudentForm] = useState({
    id: params.id,
    idOfYear: oldForm.idOfYear,
    first_name: oldForm.first_name,
    last_name: oldForm.last_name,
    year: oldForm.year,
    gender: oldForm.gender,
    infoOfSubjects: oldForm.infoOfSubjects,
    infoOfStudentProgram: oldForm.infoOfStudentProgram,
  });
  const handleChange = (e) => {
    setStudentForm({ ...studentForm, [e.target.name]: e.target.value });
  };
  const handleSelect = (val) => {
    setStudentForm({
      ...studentForm,
      infoOfSubjects: val,
    });
  };
  const handleReomve = (val) => {
    setStudentForm({
      ...studentForm,
      infoOfSubjects: val,
    });
    setSelectedTeacher([]);
    setSelectedDate([]);
    setDateID(["1", "1", "1", "1", "1"]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (var i = 0; i < studentForm.infoOfSubjects.length; i++) {
      let newArrSelectedDate = [...subjectsProgram];
      subjectsProgram[i] = {
        subject: studentForm.infoOfSubjects[i].name_of_subjects,
        teacher: selectedteacher[i],
        time: selectedDate[i],
      };
      setSubjectsProgram(newArrSelectedDate);
    }
    setStudentForm({
      ...studentForm,
      infoOfStudentProgram: subjectsProgram,
    });
    console.log(studentForm);
    let newForm = [...students];
    newForm[params.id - 1] = studentForm;
    setOldForm(newForm);
    dispatchUpdateStudentInfo(setUpdateStudent(newForm));
    navigate("/home");
  };
  const handleBack = () => {
    navigate_home("/");
  };
  useEffect(() => {
    setOldForm(students[params.id - 1]);
  }, [
    students,
    studentForm,
    dateId,
    subjectsProgram,
    selectedteacher,
    selectedDate,
  ]);

  return (
    <div className="background-form">
      <form className="student-form">
        <center>
          <h2>Update Form Of Student</h2>
        </center>

        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              value={studentForm.first_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              value={studentForm.last_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Year of study </label>
          <div className="col-sm-10">
            {" "}
            <select
              id="inputState"
              className="form-control"
              name="year"
              onChange={(e) => {
                setStudentForm({
                  ...studentForm,
                  year: e.target.value.replace(/[0-9]/g, ""),
                });
                setIdOfYear(parseInt(e.target.value));
              }}
            >
              <option value="" disabled selected hidden>
                {students[params.id - 1].year}
              </option>
              {yearList.map((data) => (
                <option value={data.id + data.year}>{data.year}</option>
              ))}
            </select>
          </div>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="Male"
                  onChange={(e) => {
                    setStudentForm({ ...studentForm, gender: e.target.value });
                  }}
                  checked={studentForm.gender === "Male" ? true : false}
                />
                <label className="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Female"
                  onChange={(e) => {
                    setStudentForm({ ...studentForm, gender: e.target.value });
                  }}
                  checked={studentForm.gender === "Female" ? true : false}
                />
                <label className="form-check-label" for="gridRadios2">
                  Female
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Subjects of Year</label>
          <div className="col-sm-10">
            <Multiselect
              className="form-control select-bottom"
              options={yearList[studentForm.idOfYear - 1].subjects}
              displayValue="name_of_subjects"
              value="Human Anatomy and Physiology"
              placeholder="Select your subject"
              onSelect={handleSelect}
              onRemove={handleReomve}
              selectedValues={studentForm.infoOfSubjects}
            />
          </div>
        </div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Column name</th>
              <th scope="col">Column type</th>
              <th scope="col">Column data</th>
            </tr>
          </thead>
          {studentForm.infoOfSubjects.map((info, key) => (
            <tbody>
              <tr>
                <th scope="row">{"Subject name"}</th>
                <td>{info.name_of_subjects}</td>
                <td>{info.name_of_subjects}</td>
              </tr>
              <tr>
                <th scope="row">{"Teacher"}</th>
                <td>
                  <select
                    onChange={(e) => {
                      let newArrTeacher = [...selectedteacher];
                      let newArrDateId = [...dateId];
                      let newArrSelectedDate = [...selectedDate];
                      selectedteacher[key] = e.target.value.replace(
                        /[0-9]/g,
                        ""
                      );
                      newArrTeacher[key] = e.target.value.replace(/[0-9]/g, "");
                      newArrDateId[key] = parseInt(e.target.value);
                      newArrSelectedDate[key] = "";
                      setSelectedTeacher(newArrTeacher);
                      setDateID(newArrDateId);
                      setSelectedDate(newArrSelectedDate);
                    }}
                  >
                    <option value="" disabled selected hidden></option>
                    {info.teachers_names.map((teacher) => (
                      <option value={teacher.id + teacher.name_of_teacher}>
                        {teacher.name_of_teacher}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{selectedteacher[key]}</td>
              </tr>
              <tr>
                <th scope="row">{"Day-Time"}</th>
                <td>
                  <select
                    onClick={(e) => {
                      let newArrSelectedDate = [...selectedDate];
                      newArrSelectedDate[key] = e.target.value;
                      setSelectedDate(newArrSelectedDate);
                    }}
                  >
                    <option value="" disabled selected hidden></option>
                    {dateId.length != 0 ? (
                      info.teachers_names[dateId[key] - 1].day_time.map(
                        (selectedDate) => (
                          <option value={selectedDate}>{selectedDate}</option>
                        )
                      )
                    ) : (
                      <></>
                    )}
                  </select>
                </td>
                <td>{selectedDate[key]}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <button
          type="submit"
          className="btn btn-primary submit-btn"
          onClick={handleSubmit}
        >
          Update
        </button>
        <button
          type="submit"
          className="btn btn-primary back-btn"
          onClick={handleBack}
        >
          Back to home Page
        </button>
      </form>
    </div>
  );
}

export default UpdateInfoOfStudent;
