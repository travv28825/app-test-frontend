import Header from "../Header";

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Layout;
