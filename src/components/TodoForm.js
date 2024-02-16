import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  // Estado local para almacenar el valor del campo de texto
  const [value, setValue] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Verifica que el input no está vacío y llama a la función para agregar una nueva tarea 
    reinicializando después el campo de texto a vacío */
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  // Formulario para la creación de tareas
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder='¿Qué tiene que hacer hoy?'
      />
      <button type="submit" className='todo-btn'>
        Añadir tarea
      </button>
    </form>
  );
};
