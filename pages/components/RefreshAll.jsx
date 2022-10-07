import React from 'react';

export default function RefreshAll({ onClick }) {
  return (
    <button className="refresh-btn" onClick={onClick}>
      REFRESH ALL
    </button>
  );
}
