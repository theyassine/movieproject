import React from 'react';

const Filter = ({ onFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onFilter({ title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="1"
        max="10"
        onChange={(e) => onFilter({ rating: parseInt(e.target.value, 10) })}
      />
    </div>
  );
};

export default Filter;
