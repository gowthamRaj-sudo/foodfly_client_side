import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer";
// import LandingPage from "./Pages/LandingPage";
import Navsection from "./Pages/Navsection";
import { Routes } from "./Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navsection />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
