const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/'));
app.post(‘/api/trello/task_support_notification’,(request,response) => {
console.log(request.body);
});
app.listen(process.env.PORT || 3000, function() {
  console.log('Servidor web escuchando en el puerto');
});
