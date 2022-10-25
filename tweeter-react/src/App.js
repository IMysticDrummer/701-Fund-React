import TweetsPage from './components/tweets/TweetsPage';

import './App.css';
import NewTweetPage from './components/tweets/NewTweetPage';
import LoginPage from './components/auth/LoginPage';

function App() {
  return (
    <div className="app">
      {/* <TweetsPage />
      <NewTweetPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
