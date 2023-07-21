// Activation.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Activation = ({ location }) => {
  const [message, setMessage] = useState('');
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  useEffect(() => {
    // Call the activation API endpoint
    axios
      .get(`http://localhost:5000/api/users/activate?token=${token}`)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error.response.data.error);
      });
  }, [token]);

  return (
    <div>
      <h1>Account Activation</h1>
      <p>{message}</p>
    </div>
  );
};

export default Activation;
