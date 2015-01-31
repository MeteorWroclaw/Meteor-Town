Router.configure({
  layoutTemplate: 'baseLayout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/user', function () {
  this.render('User');
});