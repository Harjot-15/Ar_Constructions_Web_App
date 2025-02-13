require('dotenv').config(); // Load variables from .env
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // For Node versions <18; if using Node 18+, you can use global fetch.
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so your client (index.html) can access this endpoint
app.use(cors());
// Parse JSON bodies for incoming requests
app.use(express.json());

app.post('/api/sendMessage', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ ok: false, error: 'Message is required' });
  }
  
  try {
    const telegramUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
