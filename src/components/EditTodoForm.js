import React, { useState, useRef, useEffect } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  // Estado local para almacenar el valor del campo de texto
  const [value, setValue] = useState(task.task);

  // Referencia al campo de texto para enfocarlo automáticamente
  const inputRef = useRef(null);

  // Efecto que se ejecuta una vez después del montaje del componente
  useEffect(() => {
    // Enfocar automáticamente el campo de texto cuando el componente se monta
    inputRef.current.focus();
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar a la función de edición con el nuevo valor y el ID de la tarea
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      {/* Campo de texto para editar la tarea */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef} // Asignar la referencia al campo de texto
        className="todo-input"
        placeholder="Actualizar tarea"
      />
      {/* Botón para enviar el formulario */}
      <button type="submit" className="todo-btn">
        Actualizar tarea
      </button>
    </form>
  );
};

