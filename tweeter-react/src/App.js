import { Routes, Route, Navigate } from 'react-router-dom';

import TweetsPage from './components/tweets/TweetsPage';
import NewTweetPage from './components/tweets/NewTweetPage';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import TweetPage from './components/tweets/TweetPage';
import RequireAuth from './components/auth/RequireAuth.js'

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/tweets"
          element={<TweetsPage isLogged={isLogged} onLogout={handleLogout} />}
        />
        <Route
          path="/tweets/:tweetId"
          element={<TweetPage isLogged={isLogged} onLogout={handleLogout} />}
        />
        <Route
          path="/tweets/new"
          element={
            <RequireAuth isLogged={isLogged}>
              <NewTweetPage isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/tweets" />} />
        <Route path="/404" element={<div>404 | Not found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
