var mongoose = require('mongoose');

module.exports =  mongoose.model('Todo', {
  title: 'string',
  done: 'string'
})
