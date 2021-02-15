const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// force: true drops the db
sequelize.sync({ force: false }).then(() => {
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
      }
      
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
      });
      
    app.listen(PORT, () => console.log(`Now Listening on PORT ${PORT}`));
});