import { useEffect, useState } from 'react';
import { useGateway } from '../../providers/Gateway';

function Notification({ delay = 3000 }) {
  const { state } = useGateway();
  const { message, error } = state;
  const [notification, setNotification] = useState({ error: '', message: '' });

  useEffect(() => {
    setNotification({ error, message });

    setTimeout(() => setNotification({ error: '', message: '' }), delay);
  }, [error, message]);

  return (
    <>
      {notification.message !== '' ? (
        <div className="msg msg-success">
          <p>{notification.message}</p>
        </div>
      ) : notification.error !== '' ? (
        <div className="msg msg-danger">
          <p>{notification.error}</p>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Notification;
