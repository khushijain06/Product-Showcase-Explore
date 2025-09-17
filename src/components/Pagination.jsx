import React from "react";
import { motion } from "framer-motion";

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
  <div className="flex gap-4 items-center justify-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    disabled={page === 1}
    onClick={() => onPageChange(page - 1)}
    className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-600 rounded-lg disabled:opacity-40 transition-colors"
  >
    Prev
  </motion.button>

  <span className="text-indigo-600 font-medium">
    Page {page} of {totalPages}
  </span>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    disabled={page === totalPages}
    onClick={() => onPageChange(page + 1)}
    className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-600 rounded-lg disabled:opacity-40 transition-colors"
  >
    Next
  </motion.button>
</div>

  );
};

export default Pagination;
