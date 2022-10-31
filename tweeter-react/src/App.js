import { Routes, Route, Navigate } from 'react-router-dom';

import TweetsPage from './components/tweets/TweetsPage';
import NewTweetPage from './components/tweets/NewTweetPage';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import TweetPage from './components/tweets/TweetPage';
import RequireAuth from './components/auth/RequireAuth.js'
import Layout from './components/layout/Layout.js';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  //Las rutas qeu empiezasn por tweets quedan anidadas.
  //Reservamos en layout un espacio para esa ruta
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path='/tweets' element={<Layout isLogged={isLogged} onLogout={handleLogout} />}>
          <Route
            index
            element={<TweetsPage />}
          />
          <Route
            path=":tweetId"
            element={<TweetPage />}
          />
          <Route
            path="new"
            element={
              <RequireAuth isLogged={isLogged}>
                <NewTweetPage />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="/" element={<Navigate to="/tweets" />} />
        <Route path="/404" element={<div>404 | Not found</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
