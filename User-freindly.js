import React, { useState, useEffect } from 'react';

function GetDataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to your Express API
    fetch('/api/get/getdata')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from Express API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetDataComponent;