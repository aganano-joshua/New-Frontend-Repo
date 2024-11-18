import { useEffect } from 'react';
import axios from 'axios';

const AutoRequestComponent = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const apiUrlNode = import.meta.env.VITE_BACKEND_SHARE_IN_APP_BASE_URL;

  const sendRequest = async () => {
    try {
      const response = await axios.get(`${apiUrl}/login`);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const sendRequestNode = async () => {
    try {
      const response = await axios.get(`${apiUrlNode}/api/users`);
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      sendRequest();
      sendRequestNode();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
    </>
  );
};

export default AutoRequestComponent;