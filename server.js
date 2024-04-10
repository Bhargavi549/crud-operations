const express = require("express");
const knexConfig = require('./src/knexfile');
const userRoutes = require('./src/Routes/routes');
const knex = require('knex')(knexConfig[process.env.NODE_ENV])
const app = express();
app.use(express.json());
app.use('/users', userRoutes);

const port = 3002
app.listen(port,()=>{
   console.log(`app running on port ${port}`)
})
