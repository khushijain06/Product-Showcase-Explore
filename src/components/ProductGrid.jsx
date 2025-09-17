import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onSelect }) => {
  return (
    <div className="grid gap-8 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => onSelect(product)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
