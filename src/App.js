import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import RegisterHere from "./Page/RegisterHere";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterHere />} />
      </Routes>
    </Router>
  );
}

export default App;
