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
            {/* <redirect exact from="/" to="/signin" /> */}
            {/* <Route path="/" element={<Home></Home>}></Route> */}
            <Route path="/" element={<Navigate replace to="/signin" />} />
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            {/* <Route
              path="/producto/:id"
              element={<DetailsProduct></DetailsProduct>}
            ></Route>
            <Route
              exact
              path="/agregarProducto"
              element={<PrivateRoute component={AddProduct} />}
            />
            <Route path="/login" element={<Login></Login>}></Route> */}
          </Routes>
        </BrowserRouter>
        {/* </Context> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
