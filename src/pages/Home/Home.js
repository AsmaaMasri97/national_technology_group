import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dataStudentSelector } from "../../store/slices/student/studentSlice";

function Home() {
  var navigate = useNavigate();
  var navigate_home = useNavigate();
  var navigate_update = useNavigate();
  const { students } = useSelector(dataStudentSelector);
  const handleAdd = () => {
    navigate("/add");
  };
  const handleBack = () => {
    navigate_home("/");
  };
  useEffect(() => {}, []);
  return (
    <div className="bacckground">
      <div className="header">
        <Button
          class="btn btn-primary btn-add"
          role="button"
          onClick={handleAdd}
        >
          Add New Student
        </Button>
        <Button
          class="btn btn-primary btn-add"
          role="button"
          onClick={handleBack}
        >
          Back to home Page
        </Button>
      </div>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Year</th>
            <th scope="col">gender</th>
            <th scope="col">Subjects</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.length != 0 ? (
            students.map((student) => (
              <tr>
                <th scope="row">{student.id}</th>
                <td>{student.first_name + " " + student.last_name}</td>
                <td>{student.year}</td>
                <td>{student.gender}</td>
                <td>
                  {student.infoOfSubjects.map((subject) => (
                    <div>{subject.name_of_subjects}</div>
                  ))}
                </td>
                <td onClick={() => navigate_update(`/update/${student.id}`)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                  </svg>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
