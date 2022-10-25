import { useEffect } from 'react';
import { useState } from 'react';
import { getLatestTweets } from './service';
import classNames from 'classnames';
import Layout from '../layout/Layout';

import styles from './TweetsPage.module.css';

console.log(styles);

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const tweets = await getLatestTweets();
      setTweets(tweets);
    };
    execute();
    // getLatestTweets().then(tweets => {
    //   setTweets(tweets);
    // });
  }, []);

  const className = classNames(styles.tweetsPage, {
    [styles.empty]: !tweets.length,
  });

  return (
    <Layout title="What's going on...">
      <div className={className}>
        {tweets.length ? (
          <ul>
            {tweets.map(tweet => (
              <li key={tweet.id}>{tweet.content}</li>
            ))}
          </ul>
        ) : (
          <button>Write your tweet</button>
        )}
      </div>
    </Layout>
  );
};

export default TweetsPage;
