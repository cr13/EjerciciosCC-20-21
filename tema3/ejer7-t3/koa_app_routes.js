var koa = require('koa');
var route = require('koa-route');
var app = koa();

app.use(route.get('/api/items', function* () {
    this.body = 'Get';
}));
app.use(route.get('/api/items/:id', function* (id) {
    this.body = 'Get id: ' + id;
}));
app.use(route.post('/api/items', function* () {
    this.body = 'Post';
}));
app.use(route.put('/api/items/:id', function* (id) {
    this.body = 'Put id: ' + id;
}));
app.use(route.delete('/api/items/:id', function* (id) {
    this.body = 'Delete id: ' + id;
}));

// all other routes
app.use(function* () {
    this.body = 'Hello world';
});

var server = app.listen(3004, function () {
    console.log('Koa is listening to http://localhost:3004');
});