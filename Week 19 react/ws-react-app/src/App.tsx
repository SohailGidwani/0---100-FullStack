import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
      console.log('Connected');
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log('Received message:', message.data);
      setLatestMessage(message.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (socket) {
    return (
      <div>
        <input />
        <button onClick={() => socket?.send('Hello world')}>Send</button>
        <div>Latest Message: {latestMessage}</div>
      </div>
    );
  }

  return <div>Connecting to socket server...</div>;
};

export default App;