import Header from './Header';

import './Layout.css';

const Layout = ({ children, title }) => (
  <div className="layout">
    <Header className="layout-header bordered" />
    <main className="layout-main bordered">
      <h2 className="layout-title bordered">{title}</h2>
      <section className="layout-content">{children}</section>
    </main>
    <footer className="layout-footer bordered">© 2022 Keepcoding</footer>
  </div>
);

export default Layout;
