import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormLogin from "./FormLogin";
import Dashboard from "./Dashboard";
const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        <Route path="/" element={<FormLogin />} exact></Route>
        <Route path="/dashboard" element={<Dashboard />} exact></Route>
      </Routes>
    </Router>
  );
};
export default App;
