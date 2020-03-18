'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function (req, res) {
    connection.query('SELECT * FROM todos', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            //console.log(rows)
            res.status(200)
            res.json(rows)
            //response.ok(rows, res)
        }
    });
};

exports.createTask = function (req, res) {
    //console.log(req.body.task)
    let task = req.body.task;
    let status = 1;
    connection.query('INSERT INTO todos (task, status) values (?,?)',
        [task, status],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan task!", res)
            }
        });
};

exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};