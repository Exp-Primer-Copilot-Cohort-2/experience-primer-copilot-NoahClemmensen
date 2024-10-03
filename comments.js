// Create web server that can handle POST requests to /comments
// It should send back the value of the comment key in the request body

const express = require('express');
const app = express();

app.use(express.json());

app.post('/comments', (req, res) => {
  res.send(req.body.comment);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});