import React, { useEffect } from 'react';
import './SignUp.css';

function SignUp(props) {
  useEffect(() => {
    document.title = "Sign Up"
  },[])
  return (
    <div id="SignUp">
      <header id="header-signup">
        <h2>Sign Up</h2>
      </header>
    </div>
  );
}

export default SignUp;