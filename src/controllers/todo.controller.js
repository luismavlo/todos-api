const Todo = require('../models/todo.model'); // Asegúrate de importar correctamente tu modelo

// Listar todos los Todos
exports.findAll = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    return res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Algo salió mal al listar los Todos.'
    });
  }
};

// Crear un nuevo Todo
exports.create = async (req, res) => {
  try {
    const { text, completedAt } = req.body;
    const newTodo = await Todo.create({ text, completedAt });
    return res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Algo salió mal al crear el Todo.'
    });
  }
};

// Obtener un Todo por ID
exports.findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({
        message: 'Todo no encontrado.'
      });
    }
    return res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Algo salió mal al obtener el Todo.'
    });
  }
};

// Actualizar un Todo por ID
exports.update = async (req, res) => {
  const { id } = req.params;
  const { text, completedAt } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({
        message: 'Todo no encontrado.'
      });
    }
    todo.text = text;
    todo.completedAt = completedAt;
    await todo.save();
    return res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Algo salió mal al actualizar el Todo.'
    });
  }
};

// Eliminar un Todo por ID
exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({
        message: 'Todo no encontrado.'
      });
    }
    await todo.destroy();
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Algo salió mal al eliminar el Todo.'
    });
  }
};
