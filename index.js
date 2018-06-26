const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {logger} = require('./auth/authMiddleware');

// config
const PORT = 3000;

// routes
const authRouter = require('./auth/authRouter');
const accountRouter = require('./accounts/accountRouter');
const favouritesRouter = require('./favourites/favouritesRouter');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(logger); //middleware -- place before routers

app.use('/auth', logger, authRouter);
app.use('/account', logger, accountRouter);
app.use('/favourites', logger, favouritesRouter);

app.listen(PORT, () => {
    console.info(`listening on port ${PORT} 😆😆`)
})