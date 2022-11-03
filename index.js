const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require("body-parser");
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/'));
app.get("/api/trello/task_support_notification", (req, res, next) => {
   console.log(req);
   res.sendStatus(200);
});
app.post("/api/trello/task_support_notification", (req, res, next) => {
   console.log(req.body.action.data.card);
   res.sendStatus(200);
});
app.listen(process.env.PORT || 3000, function() {
  console.log('Servidor web escuchando en el puerto');
});
