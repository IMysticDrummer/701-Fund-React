import client from '../../api/client';

const tweetsUrl = '/api/tweets';

export const getLatestTweets = () => {
  const url = tweetsUrl;
  return client.get(url);
};
