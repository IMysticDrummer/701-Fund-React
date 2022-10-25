import { useState } from 'react';
import Button from '../common/Button';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = event => setUsername(event.target.value);
  const handleChangePassword = event => setPassword(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div>
      <h1>Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleChangeUsername} />
        <input
          type="password"
          name="password"
          onChange={handleChangePassword}
        />
        <Button type="submit" variant="primary">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
