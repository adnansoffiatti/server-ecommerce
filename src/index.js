require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3333;

const app = express();

app.listen(PORT, () => console.log('Server running'));