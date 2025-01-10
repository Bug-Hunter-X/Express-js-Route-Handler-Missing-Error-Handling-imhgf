const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // Simulate fetching user data (replace with actual database query)
    const user = getUser(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

function getUser(id) {
  // Replace with your database or data source lookup
  const users = {
    '1': { id: '1', name: 'John Doe' },
    '2': { id: '2', name: 'Jane Smith' },
  };
  return users[id];
} 
app.listen(3000, () => console.log('Server listening on port 3000'));