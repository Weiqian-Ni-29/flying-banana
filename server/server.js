const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")))

const port = 5000;

app.get('/', (req, res) => {
  res.send('this is the root of webpage');
});

app.post('/api/message', (req, res) => {
  console.log('Received message:', req.body.message);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
