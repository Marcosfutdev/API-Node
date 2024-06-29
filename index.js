const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');
require('./express');
dotenv.config();
connectToDatabase();
