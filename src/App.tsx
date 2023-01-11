import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="user name"
        />
      </form>

      <p>User name: {userName}</p>
    </>
  );
}

export default App;
