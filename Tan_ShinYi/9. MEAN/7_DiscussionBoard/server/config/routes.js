var Users = require('../controllers/users.js');
var Messages = require('../controllers/messages.js');

module.exports = (function(app){
  app.post('/user/:id', Users.getOne);
  app.post('/create', Users.create);
  app.post('/login', Users.login);
  app.get('/logout', Users.logout);

  app.get('/categories', Messages.categories);
  app.post('/newTopic', Messages.newTopic);
  app.post('/newPost/:topicId', Messages.newPost);
  app.post('/newComment/:postId', Messages.newComment);
  app.get('/index', Messages.index);
  app.get('/topic/:id', Messages.topic);
  app.post('/vote/:postId', Messages.vote);
});
