import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  // Estado local para almacenar el valor del campo de texto
  const [value, setValue] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    // Evitar la acción por defecto del formulario (recargar la página)
    e.preventDefault();
    // Verificar si el valor del campo de texto no está vacío
    if (value) {
      // Llamar a la función para agregar una nueva tarea
      addTodo(value);
      // Limpiar el campo de texto después de enviar el formulario
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      {/* Campo de texto para ingresar una nueva tarea */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder='¿Qué tiene que hacer hoy?'
      />
      {/* Botón para enviar el formulario */}
      <button type="submit" className='todo-btn'>
        Añadir tarea
      </button>
    </form>
  );
};
