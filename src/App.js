import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
