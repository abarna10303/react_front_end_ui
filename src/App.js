import { useDispatch } from "react-redux";
import "./App.css";
import { getFetchData } from "./store/thunck";
import Button from "@mui/material/Button";

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getFetchData());
  };
  return (
    <div className="App">
      <h1>Click to get data</h1>
      <button onClick={handleClick}>Get Data</button>
      <Button>hello</Button>
    </div>
  );
}

export default App;
