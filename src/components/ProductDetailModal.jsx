import React from "react";
import { motion } from "framer-motion";

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white p-6 rounded-xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto shadow-2xl relative"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full text-lg"
        >
          ✕
        </button>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          {product.images &&
            product.images.slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.title} ${i}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
        </div>

        {/* Title & Brand */}
        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
        <p className="text-gray-600">Brand: {product.brand}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>

        {/* Description */}
        <p className="mt-3 text-gray-700">{product.description}</p>

        {/* Price */}
        <p className="text-xl font-semibold text-indigo-600 mt-2">
          ${product.price}{" "}
          {product.discountPercentage && (
            <span className="text-sm text-red-500 ml-2">
              ({product.discountPercentage}% OFF)
            </span>
          )}
        </p>

        {/* Stock & Rating */}
        <p className="text-sm mt-1">Stock: {product.stock}</p>
        <p className="text-sm text-yellow-600 mt-1">⭐ {product.rating}</p>

        {/* Warranty & Shipping */}
        {product.warrantyInformation && (
          <p className="text-sm mt-2">
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>
        )}
        {product.shippingInformation && (
          <p className="text-sm mt-1">
            <strong>Shipping:</strong> {product.shippingInformation}
          </p>
        )}

        {/* Reviews */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Reviews</h3>
            <ul className="mt-2 space-y-2">
              {product.reviews.map((review, idx) => (
                <li
                  key={idx}
                  className="border-b pb-2 last:border-none last:pb-0"
                >
                  <p className="font-medium">{review.reviewerName}</p>
                  <p className="text-yellow-600">⭐ {review.rating}</p>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailModal;
