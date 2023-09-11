const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // CORSミドルウェアを使用してすべてのオリジンからのアクセスを許可

app.post('/fetch-data', (req, res) => {
  const { baseURI } = req.body;

  // baseURIから実際のファイルパスを生成
  const filePath = path.join(__dirname, baseURI);

  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
