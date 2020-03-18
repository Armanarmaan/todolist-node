'use strict';

module.exports = function (app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/todos')
        .get(todoList.users);

    app.route('/todos')
        .post(todoList.createTask);
};