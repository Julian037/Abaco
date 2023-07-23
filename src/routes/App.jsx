import Home from "../app/screens/Home/Home";
import SignIn from "../app/screens/SignIn/SignIn";
import SignUp from "../app/screens/SignUp/SignUp";
import { ThemeProvider } from "@mui/material/styles";
// import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import theme from "../theme";
import "../assets/containers/styles/App.css";

// import { Context } from "./context/Context.jsx";

function App() {
  //   const isLogin = localStorage.getItem("isLogin");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Context> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/signin" />} />
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
