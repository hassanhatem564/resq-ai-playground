const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('ResQ AI backend is running 🔥');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
