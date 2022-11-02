import { Routes, Route, Navigate } from 'react-router-dom';

import TweetsPage from './components/tweets/TweetsPage';
import NewTweetPage from './components/tweets/NewTweetPage';
import LoginPage from './components/auth/LoginPage';
import TweetPage from './components/tweets/TweetPage';
import RequireAuth from './components/auth/RequireAuth';
import Layout from './components/layout/Layout';

function App() {
    //Las rutas que empiezan por tweets quedan anidadas.
  //Reservamos en layout un espacio para esa ruta.
  //Pasamos ahora el estado a través de AuthContextProvider
  //Paso 2... Refactorizamos AuthContextProvider como una función
  //en context.js... llevamos la autorización de app allí, y envolvemos en
  //index.js , pasando la prop "isInitiallyLogged", para que sirva el resto
  //de datos la función del context
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route
          path="/tweets"
          element={<Layout/>}
        >
          <Route index element={<TweetsPage />} />
          <Route path=":tweetId" element={<TweetPage />} />
          <Route
            path="new"
            element={
              <RequireAuth>
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
