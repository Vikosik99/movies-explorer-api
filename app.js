require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, DB_URL } = require('./utils/config');
const rateLimit = require('./middlewares/rateLimit');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(rateLimit);
app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose.connect(DB_URL, { useNewUrlParser: true });

app.use(requestLogger); // подключаем логгер запросов

app.use(router);

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());

app.use(errorHandler);

app.listen(PORT);
