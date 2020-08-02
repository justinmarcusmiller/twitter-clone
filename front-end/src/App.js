import React, { useEffect, useState } from 'react';
import Feed from './components/Feed/Feed.jsx';
import SignUp from './components/SignUp/SignUp.jsx'
import SignIn from './components/SignIn/SignIn.jsx'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { listTweets } from './API.js';

function App() {
  const  [tweets, setTweets] = useState([]);
  useEffect(() => {
    (async () => {
      const tweetData = await listTweets();
      setTweets(tweetData);
      console.log(tweetData);
      
    })();
  }, []);

  return (
    <Router>
      <Route 
        exact
        path="/"
        render={() => <Feed tweets={tweets} />} 
      />
      <Route 
        exact
        path="/signup"
        render={() => <SignUp/>} 
      />
      <Route 
        exact
        path="/signin"
        render={() => <SignIn/>} 
      />
    </Router>
      

  );
}

export default App;
