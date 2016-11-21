module.exports = function(app) {
	var User = app.models.User;
	User.create([
    {username: 'v1', email: 'v1@gmail.com', password: 'v1'},
    {username: 'v2', email: 'v2@gmail.com', password: 'v2'},
    {username: 'v3', email: 'v3@gmail.com', password: 'v3'}
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);
});
};