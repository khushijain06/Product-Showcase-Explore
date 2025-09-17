import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, onClick }) => {
  console.log(product.tags)
  return (
 <motion.div
  onClick={onClick}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  className="bg-white shadow-md hover:shadow-xl rounded-xl p-4 cursor-pointer transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
>
  {/* Thumbnail */}
  <img
    src={product.thumbnail}
    alt={product.title}
    className="w-full h-44 object-cover rounded-lg"
  />

  {/* Title & Brand */}
  <h2 className="text-lg font-semibold mt-3 text-gray-800 truncate">
    {product.title}
  </h2>
  <p className="text-sm text-indigo-500 font-medium">{product.brand}</p>

  {/* Price & Discount */}
  <p className="text-lg font-bold text-green-600 mt-2">
    ${product.price}{" "}
    {product.discountPercentage && (
      <span className="text-sm text-red-500 ml-2 font-medium">
        ({product.discountPercentage}% OFF)
      </span>
    )}
  </p>

  {/* Rating */}
  <p className="text-sm text-yellow-500 mt-1">⭐ {product.rating}</p>

  {/* Availability */}
  <p className="text-xs text-gray-500 mt-1">
    Availability: {product.availabilityStatus}
  </p>

  {/* Tags */}
  {product.tags && product.tags.length > 0 && (
    <div className="flex flex-wrap gap-2 mt-3 justify-center">
      {product.tags.map((tag) => (
        <span
          key={tag.slug}
          className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full font-medium"
        >
        </span>
      ))}
    </div>
  )}
</motion.div>

  );
};

export default ProductCard;
