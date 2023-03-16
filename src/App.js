import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
   BrowserRouter as Router,
   Routes,
   Route,
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success")
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Awesome"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Start using the TextUtils Now"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      // document.title = "TextUtils - Light Mode"
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container mmy-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
      </Routes>      
      </div>
    </Router>
    </>
  );
}

export default App;
