import "./style/App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Login from "./pages/LoginUi";
import Register from "./pages/Register";
import NewCard from "./pages/NewCard";
import ForgotPass from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Document from "./pages/Document";
import AboutUs from "./pages/AboutUs";
const App = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            authCtx.isAuthenticated ? (
              <Home />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/document/:name"
          element={
            authCtx.isAuthenticated ? (
              <Document />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/home"
          element={
            authCtx.isAuthenticated ? (
              <Home />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />

        <Route
          path="/login"
          element={
            authCtx.isAuthenticated ? (
              <Navigate replace to="/home" />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/newCard" element={<NewCard />} />
        <Route path="/categories/:id" element={<Categories />} />
        <Route
          path="/register"
          element={
            authCtx.isAuthenticated ? (
              <Navigate replace to="/home" />
            ) : (
              <Register />
            )
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/forgot-password"
          element={
            authCtx.isAuthenticated ? (
              <Navigate replace to="/home" />
            ) : (
              <ForgotPass />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
