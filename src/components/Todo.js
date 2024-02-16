import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  // Función para manejar el cambio de completado al hacer clic en la casilla de verificación
  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  return (
    <div className={`Todo ${task.completed ? 'completed' : ''}`}>
      {/* Casilla de verificación para marcar la tarea como completada o no */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
        className="todo-checkbox"
      />
      {/* Texto de la tarea */}
      <p className="todo-text">
        {task.task}
      </p>
      <div>
        {/* Icono para editar la tarea */}
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        {/* Icono para eliminar la tarea */}
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
