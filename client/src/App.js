import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/test")
      .then(response => response.json())
      .then(data => setBackendData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div>App</div>
      <div>
        {typeof backendData.users === 'undefined' ? (
          <p>Loading data....</p>
        ) : (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
