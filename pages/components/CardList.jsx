import React from 'react';

export default function CardList({ onClick, id, url }) {
  return (
    <li
      /* Calls the refresh user function on click */
      onClick={onClick}
      key={id}
    >
      <div className="imageRefresh"></div>
      <picture>
        <img src={url} width={240} height={240} alt="Portrait" />
      </picture>

      {/* Container where we have the filter and the refresh SVG added in hover */}
    </li>
  );
}
