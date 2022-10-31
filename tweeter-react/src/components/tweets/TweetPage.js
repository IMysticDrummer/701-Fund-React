import { useParams } from 'react-router-dom';
import Page from '../layout/Page.js';

import Layout from '../layout/Layout';

const TweetPage = props => {
  const { tweetId } = useParams();

  return (
    <Page title="Tweet detail" {...props}>
      <div>Tweet detail {tweetId}</div>
    </Page>
  );
};

export default TweetPage;
