const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require("body-parser");
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/'));

app.post("/api/trello/task_support_notification", (req, res, next) => {
   console.log(req);
   res.sendStatus(200);
});
app.listen(process.env.PORT || 3000, function() {
  console.log('Servidor web escuchando en el puerto');
});
