import React from "react";

const SortBar = ({ sortOption, onSortChange }) => {
  return (
    <div className="flex justify-end mb-4">
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="title-asc">Title: A → Z</option>
        <option value="title-desc">Title: Z → A</option>
      </select>
    </div>
  );
};

export default SortBar;
