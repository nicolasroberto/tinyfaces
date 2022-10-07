import React from 'react';

export default function AddButton({ onClick }) {
  return (
    <button onClick={onClick} className="add-btn">
      <div className="add-icon" alt=""></div>
    </button>
  );
}
