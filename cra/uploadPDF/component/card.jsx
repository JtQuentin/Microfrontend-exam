import React from 'react';

function Card({ title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Unique card component for remote</p>
    </div>
  );
}

export default Card;
