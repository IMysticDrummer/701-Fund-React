import classNames from 'classnames';
import Button from '../common/Button';

import logo, { ReactComponent as Icon } from '../../assets/twitter.svg';

import './Header.css';

const Header = ({ className }) => {
  return (
    <header className={classNames('header', className)}>
      <div className="header-logo">
        {/* <img src={logo} alt="Twitter-React" /> */}
        <Icon width="32" height="32" />
      </div>
      <nav className="header-nav">
        <Button variant="primary" className="header-button">
          Login
        </Button>
      </nav>
    </header>
  );
};

export default Header;
