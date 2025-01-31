import React from 'react';
import useIsOnline from './hooks/useIsOnline'; // Assuming the hook is in a "hooks" folder

function App() {
  const isOnline = useIsOnline();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Network Status Checker</h1>
      <h2 style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'You are Online 🚀' : 'You are Offline 😢'}
      </h2>
      <p>Toggle your internet connection to see the status change in real time.</p>
    </div>
  );
}

export default App;
