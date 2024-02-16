import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  // Estado local para almacenar la lista de tareas
  const [todos, setTodos] = useState([]);

  // Efecto que se ejecuta una vez después del montaje del componente para obtener las tareas guardadas en el localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Función para agregar una nueva tarea
  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false, background: "" },
    ];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Función para eliminar una tarea
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  // Función para cambiar el estado de completado de una tarea
  const toggleComplete = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Función para cambiar al modo de edición de una tarea
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Función para editar el contenido de una tarea
  const editTask = (task, id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Función para cambiar el estado de completado de todas las tareas
  const toggleSelectAll = () => {
    const areAllCompleted = todos.every((todo) => todo.completed);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: !areAllCompleted,
    }));
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Función para eliminar todas las tareas completadas
  const deleteSelected = () => {
    const remainingTodos = todos.filter((todo) => !todo.completed);
    setTodos(remainingTodos);
    localStorage.setItem('todos', JSON.stringify(remainingTodos));
  };


  return (
    <div className="TodoWrapper">
      <h1>Lista de tareas</h1>
      {/* Componente para agregar una nueva tarea */}
      <TodoForm addTodo={addTodo} />
      {/* Mapeo de las tareas para renderizarlas */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      {/* Contador de tareas realizadas */}
      <p id="done-tasks">Tareas realizadas: {todos.filter((todo) => todo.completed).length}</p>
      {/* Botón para seleccionar/deseleccionar todas las tareas */}
      <button className="post-btn" onClick={toggleSelectAll}>Seleccionar/Deseleccionar todas</button>
      {/* Botón para eliminar las tareas seleccionadas */}
      <button className="post-btn" onClick={deleteSelected}>Borrar seleccionadas</button>
    </div>
  );
};
