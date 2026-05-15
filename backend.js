// Node.js + Express example (server.js)
const express = require('express');
const cors = require('cors');
const rssParser = require('rss-parser');

const app = express();
app.use(cors());

const parser = new rssParser();

app.get('/api/news', async (req, res) => {
  try {
    const cnn = await parser.parseURL('http://rss.cnn.com/rss/edition.rss');
    // Add Fox, Reuters, CNBC similarly
    res.json({ cnn: cnn.items.slice(0, 10) });
  } catch(e) {
    res.status(500).json({error: e.message});
  }
});

app.listen(3000);
