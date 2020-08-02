import React, { useEffect } from 'react';
import './SignIn.css';

function SignIn(props) {
  useEffect(() => {
    document.title = "Sign In"
  },[])
  return (
    <div id="SignIn">
      <header id="header-signin">
        <h2>Sign In</h2>
      </header>
    </div>
  );
}

export default SignIn;