import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/views/Projects/Projects";
import AddProject from "./components/views/AddProject/AddProject";
import EditProject from "./components/views/EditProject/EditProject";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/editproject/:id" element={<EditProject />} />
      </Routes>
    </div>
  );
}

export default App;
