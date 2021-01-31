const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// force: true drops the db
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on PORT ${PORT}`));
});