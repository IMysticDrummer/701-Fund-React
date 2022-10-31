import { useState } from "react";
import Button from "../common/Button";
import FormField from "../common/FormField";
import { useLocation, useNavigate } from "react-router-dom";

import "./LoginPage.css";
import { login } from "./service";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  //Recogemos el location
  const location = useLocation();
  //Recoge una función navigate para usar navigate en javascript
  const navigate = useNavigate();

  const handleChangeUsername = (event) => setUsername(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      resetError();
      setIsFetching(true);
      await login({ username, password });
      onLogin();
      // navega a /tweets/new o en el path del que venía el usuario (location)
      const to = location.state?.from?.pathname || "/";
      //navigate acepta una opción "replace" que nos permite retocar el histórico para evitar volver al login.
      navigate(to, { replace: true });
    } catch (error) {
      setError(error);
      setIsFetching(false);
    }
  };

  const isButtonEnabled = () => username && password && !isFetching;

  return (
    <div className='loginPage'>
      <h1 className='loginPage-title'>Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type='text'
          name='username'
          label='phone, email or username'
          className='loginForm-field'
          onChange={handleChangeUsername}
          value={username}
        />
        <FormField
          type='password'
          name='password'
          label='password'
          className='loginForm-field'
          onChange={handleChangePassword}
          value={password}
        />
        <Button
          type='submit'
          variant='primary'
          className='loginForm-submit'
          disabled={!isButtonEnabled()}
        >
          Log in
        </Button>

        {/* <input
          type="checkbox"
          onChange={event => {
            console.log(event.target.checked);
          }}
          // value={remember}
        />
        <input
          type="file"
          onChange={event => console.log(event.target.files)}
        />
        <select
          // value={fruit}
          onChange={event => console.log(event.target.value)}
        >
          <option value="orange">Orange</option>
          <option value="apple">Apple</option>
        </select> */}
      </form>
      {error && (
        <div
          onClick={resetError}
          className='loginPage-error'
        >
          {error.message}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
