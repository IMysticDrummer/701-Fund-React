import { useEffect } from "react";
import { useState } from "react";
import { getLatestTweets } from "./service";

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const tweets = await getLatestTweets();
      setTweets(tweets);
    };
    execute();
  }, []);

  return (
    <div className='tweetsPage'>
      {tweets.length ? (
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id}>{tweet.content}</li>
          ))}
        </ul>
      ) : (
        <button>Write your tweet</button>
      )}
    </div>
  );
};

export default TweetsPage;
