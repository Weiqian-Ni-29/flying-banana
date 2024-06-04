/* Logic to call the python crawler */
const { spawn } = require('child_process');
let crawler_process = spawn('venv/bin/python', ['main.py', '--platform', 'xhs', '--lt', 'cookie', '--type', 'search'], {cwd:'utils/MediaCrawler'});
crawler_process.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

crawler_process.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

crawler_process.on('close', (code) => {
  console.log(`Crawler process has finished, the return code is: ${code}`);
});



// some dummy code to start the server
// const express = require('express');
// const app = express();
// const path = require('path');
// const bodyParser = require("body-parser");
// const cors = require("cors");
// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.static(path.join(__dirname + "/public")))

// const port = 5000;

// app.get('/', (req, res) => {
//   res.send('this is the root of webpage');
// });

// app.post('/api/message', (req, res) => {
//   console.log('Received message:', req.body.message);
//   res.sendStatus(200);
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


