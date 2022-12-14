import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import Button from "../common/Button";

import { ReactComponent as Icon } from "../../assets/twitter.svg";

import "./Header.css";
import { logout } from "../auth/service";
import { useAuth } from "../auth/context";


const Header = ({ className }) => {
  //Antes del custom hook
  //const { isLogged, handleLogout } = useContext(AuthContext);

  //Después del custom hook.
  //Encapsula el uso del contexto. Sólo le decimos que para conseguir
  //el valor, llame a useAuth()
  const { isLogged, handleLogout } = useAuth();
  const handleLogoutClick = async () => {
    await logout();
    handleLogout();
  };

  return (
    <header className={classNames("header", className)}>
      <Link to='/'>
        <div className='header-logo'>
          {/* <img src={logo} alt="Twitter-React" /> */}
          <Icon
            width='32'
            height='32'
          />
        </div>
      </Link>
      <nav className='header-nav'>
        <NavLink
          to='/tweets/new'
          // className={({ isActive }) => (isActive ? 'selected' : '')}
          // style={({ isActive }) => (isActive ? { color: 'green' } : null)}
        >
          New tweet
        </NavLink>
        |
        <NavLink
          to='/tweets'
          // className={({ isActive }) => (isActive ? 'selected' : '')}
          // style={({ isActive }) => (isActive ? { color: 'green' } : null)}
          end
        >
          See all tweets
        </NavLink>
        {isLogged ? (
          <Button
            className='header-button'
            onClick={handleLogoutClick}
          >
            Logout
          </Button>
        ) : (
          <Button
            as={Link}
            to='/login'
            variant='primary'
            className='header-button'
          >
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
