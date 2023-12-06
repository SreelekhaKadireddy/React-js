const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
// https://mongoosejs.com/docs/queries.html
const cors = require('cors');

// configure cors
app.use(cors());

// configure dotEnv
dotEnv.config({ path: './config/config.env' });

// configure express to receive the form data
const maxRequestBodySize = '500Mb';
app.use(express.json({limit: maxRequestBodySize}));
app.use(express.urlencoded({limit: maxRequestBodySize}));

// const hostname = process.env.SERVER_HOST_NAME;
const port = process.env.PORT;
const hostname = process.env.HOST_NAME

app.get('/', (request, response) => {
    response.send(`<h2>Welcome to BigBasket Express Server</h2>`);
});

// connect to Mongo DB Database
mongoose.connect(process.env.MONGO_DB_LoCAL_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then((response) => {
    console.log(`Connected to Mongo DB Successfully...........`);
}).catch((err) => {
    console.error(err);
    process.exit(1); // stop the node js process if unable to connect to mongodb
});

// configure the router
app.use('/api', require('./router/apiRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});
