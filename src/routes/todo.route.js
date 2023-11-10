const express = require('express');

const todoController = require('./../controllers/todo.controller')

const router = express.Router();

router.route('/')
      .get(todoController.findAll)
      .post(todoController.create)

router.route('/:id')
      .get(todoController.findOne)
      .patch(todoController.update)
      .delete(todoController.delete)


module.exports = router