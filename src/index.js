import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "../src/store/store";
import AddNewStudent from "./pages/Forms/addNewStudent";
import UpdateInfoOfStudent from "./pages/Forms/updateInfoOfStudent";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddNewStudent />} />
          <Route path="/update/:id" element={<UpdateInfoOfStudent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
