'use strict';

const express = require('express');
const axios = require('axios')

// Constants
const PORT = 3000;


// App
const app = express();
app.get('/', async (req, res) => {
  const {data} = await axios.get("http://localhost:49160")
  res.send(data)
});

app.get('/eval', async (req, res) => {
  try {
    console.log("we hit the get request")
    const {data} = await axios.put("http://localhost:49160/eval", {func: "2+2"} )
    //"function test(){return 2+2}; test()"
    res.json(data)
  } catch (error) {
    console.log('this is the error in client site server: ', error)
  }
  
});

app.listen(PORT, () =>
console.log(`Mixing it up on port ${PORT}`));
