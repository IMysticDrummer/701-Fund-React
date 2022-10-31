import { Outlet } from 'react-router-dom';
import Header from './Header';

import './Layout.css';

<<<<<<< HEAD
//Outlet va a mostrar la ruta que gane.
//La cabecera y el pi no se renderizan en cada refresco
const Layout = ({ children, title, ...props }) => (
  <div className="layout">
    <Header className="layout-header bordered" {...props} />
    <main className="layout-main bordered">
      <Outlet />
=======
const Layout = ({ children, title }) => (
  <div className="layout">
    <Header className="layout-header bordered" />
    <main className="layout-main bordered">
      <h2 className="layout-title bordered">{title}</h2>
      <section className="layout-content">{children}</section>
>>>>>>> 901fbbf20b785826386d6225e65c8776089f6dd5
    </main>
    <footer className="layout-footer bordered">© 2022 Keepcoding</footer>
  </div>
);

export default Layout;
