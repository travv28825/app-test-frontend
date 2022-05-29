import Header from '../Header';
import Notification from '../Notification/Notification.component';

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <div className="container">{children}</div>
      <Notification />
    </div>
  );
}

export default Layout;
