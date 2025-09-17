import React from "react";
import { motion } from "framer-motion";

const FilterBar = ({ categories, onFilter }) => {
  return (
  <div className="flex flex-wrap gap-3 mb-8 justify-center">
  {categories.map((category) => (
    <motion.button
      key={category.slug}
      onClick={() => onFilter(category.slug)}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-sm font-medium transition-all"
    >
      {category.name}
    </motion.button>
  ))}
</div>

  );
};

export default FilterBar;
