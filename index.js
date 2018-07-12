const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'))
app.use('/', express.static('blog/public'));

app.get('/some_action', function(request, response) {
	console.log('some action handler')
});

app.listen(4000, () => console.log('Server started. Listening at 4000 port'));