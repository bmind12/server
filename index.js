const express = require('express');
const bodyParser = require('body-parser');
const port = 3030;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send({ Hello: 'World!' }));

app.listen(port, () => console.log(`Listening on port ${port}!`));
