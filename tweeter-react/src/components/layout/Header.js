import Button from '../common/Button';

import logo, { ReactComponent as Icon } from '../../assets/twitter.svg';

const Header = () => {
  return (
    <header>
      <div>
        {/* <img src={logo} alt="Twitter-React" /> */}
        <Icon width="32" height="32" />
      </div>
      <nav>
        <Button variant="primary">Login</Button>
      </nav>
    </header>
  );
};

export default Header;
