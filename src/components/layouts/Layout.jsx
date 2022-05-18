import Header from "../Header";

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
