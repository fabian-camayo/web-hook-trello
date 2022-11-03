const express = require('express');
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/'));

app.post("/api/trello/task_support_notification", (req, res, next) => {
   console.log(req);
});
app.listen(process.env.PORT || 3000, function() {
  console.log('Servidor web escuchando en el puerto');
});
