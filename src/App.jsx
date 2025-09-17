import React, { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import FilterBar from "./components/FilterBar";
import ProductDetailModal from "./components/ProductDetailModal";
import Pagination from "./components/Pagination";
import { motion } from "framer-motion";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);

  // ✅ Fetch categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // ✅ Fetch products
  const handleFilter = (categorySlug) => {
    setActiveCategory(categorySlug);
    fetch(
      `https://dummyjson.com/products/category/${categorySlug}?limit=12&skip=${
        (page - 1) * 12
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      });
  };

  // ✅ Smooth scroll to detail
  const handleSelect = (product) => {
    setSelected(product);
    setTimeout(() => {
      document
        .getElementById("product-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-indigo-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🛍️ Product Store
          </motion.h1>
          <p className="text-sm text-indigo-400">
            {activeCategory ? `Category: ${activeCategory}` : "Select a Category"}
          </p>
        </div>
      </header>

      {/* Main Content */}
     <main className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">
  <FilterBar categories={categories} onFilter={handleFilter} />
  <ProductGrid products={products} onSelect={handleSelect} />
  {total > 12 && (
    <div className="mt-8">
      <Pagination
        page={page}
        totalPages={Math.ceil(total / 12)}
        onPageChange={setPage}
      />
    </div>
  )}
</main>
  {/* Product Detail Section */}
        {selected && (
          <motion.div
            id="product-detail"
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductDetailModal
              product={selected}
              onClose={() => setSelected(null)}
            />
          </motion.div>
        )}

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-indigo-400 text-sm">
          © {new Date().getFullYear()} Product Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
