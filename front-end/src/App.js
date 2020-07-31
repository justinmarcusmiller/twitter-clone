import React, { useEffect, useState } from 'react';
import Feed from './components/Feed/Feed.jsx';

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
    <div className="App">
      <Feed 
        tweets={tweets}
      />
    </div>
  );
}

export default App;
