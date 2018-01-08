// server.js
const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/app'));
// Start the app by listening on the default
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/app/app.component.html'));
});
// Heroku port
app.listen(process.env.PORT || 8080);
