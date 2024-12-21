import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import RegisterHere from "./Page/RegisterHere";
import Dashboard from "./Page/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterHere />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
