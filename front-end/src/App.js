import React, { useEffect, useState } from "react";
import Feed from "./components/Feed/Feed.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Landing from "./components/Landing/Landing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/home" render={() => <Feed />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route exact path="/login" render={() => <LogIn />} />
    </Router>
  );
}

export default App;
