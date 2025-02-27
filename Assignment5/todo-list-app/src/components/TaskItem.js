import React, { useState } from 'react';

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      onEdit(task.id, newText);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="buttons">
        <button onClick={() => onComplete(task.id)} className="btn-complete">
          Complete
        </button>
        <button onClick={handleEdit} className="btn-edit">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => onDelete(task.id)} className="btn-delete">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
