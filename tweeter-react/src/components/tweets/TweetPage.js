import { useParams } from 'react-router-dom';

import Layout from '../layout/Layout';

const TweetPage = props => {
  const { tweetId } = useParams();

  return (
    <Layout title="Tweet detail" {...props}>
      <div>Tweet detail {tweetId}</div>
    </Layout>
  );
};

export default TweetPage;
