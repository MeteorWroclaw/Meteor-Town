Router.configure({
  layoutTemplate: 'baseLayout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/sign-in', function () {
  this.render('signIn');
},{
	name: 'signIn',
});

Router.route('/your-town', function () {
  this.render('yourTown');
},{
	name: 'yourTown',
});