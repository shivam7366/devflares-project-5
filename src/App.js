import logo from "./logo.svg";
import "./App.css";
import Home from "./components/screens/Home";
// import BA from "./components/cards";
import BasicExample from "./components/cards";
import Create from "./components/UI/Create";
// import Home from "./components/screens/Home";
import { Route, Routes } from "react-router-dom";
import ViewOne from "./components/UI/ViewOne";

function App() {
  return (
    <>
      {" "}
      <Home />
      <div className="container">
        {/* <BasicExample /> */}
        {/* <Create /> */}
        <Routes>
          <Route path="/" element={<BasicExample />} excat />
          <Route path="/hackathon/:id" element={<ViewOne />} />

          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
