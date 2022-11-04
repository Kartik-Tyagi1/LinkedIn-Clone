import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed/Feed";
import { auth } from "./Firebase/Firebase";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user logged in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        // user logged out
        dispatch(logout);
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {/* If user is null render the login page, else render the app */}
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
