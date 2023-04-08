import "./App.css";
import Home from "./Main-Components/Home/Home";
import Login from "./Main-Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/home" element={<Home/>} />

    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
