import React, { useEffect, useState } from 'react';

import { useGateway } from '../../providers/Gateway';

import NewGateway from './NewGateway';
import ListDevices from './ListDevice';
import ListGateway from './ListGateway';
import UpdateGateway from './UpdateGateway';
import './Gateway.style.css';

function Gateway() {
  const { state, getData } = useGateway();
  const { message, error, isUpdating } = state;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-gateway">
      <ListDevices />
      <div className="crud-gateway">
        <NewGateway />
        {isUpdating && <UpdateGateway />}
        <ListGateway />
      </div>
      <Notification error={error} message={message} />
    </div>
  );
}

function Notification({ error, message }) {
  const [notification, setNotification] = useState({ error: '', message: '' });

  useEffect(() => {
    setNotification({ error, message });

    setTimeout(() => setNotification({ error: '', message: '' }), 3000);
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

export default Gateway;
