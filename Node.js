
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // You can choose any port you prefer

// Define a GET route to fetch data from the external API
app.get('/api/get/getdata', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
      params: {
        postId: 1
      }
    });
    
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

