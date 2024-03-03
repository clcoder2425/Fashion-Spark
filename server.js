const express = require('express');
const server = require('./graphql');
const User = require('./models/User');

const app = express();

// Integrating Apollo Server with Express
server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});