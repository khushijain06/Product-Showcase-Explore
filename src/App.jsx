import React, { useEffect, useState } from "react";
import ProductGrid from "./components/ProductGrid";
import FilterBar from "./components/FilterBar";
import ProductDetailModal from "./components/ProductDetailModal";
import Pagination from "./components/Pagination";
import SortBar from "./components/SortBar";
import {motion} from 'framer-motion'
const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(0);
  const [limit] = useState(12);
  const [total, setTotal] = useState(0);

  const [sortOption, setSortOption] = useState("");

  // ✅ Fetch categories once
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // ✅ Fetch products by category with pagination
  const handleFilter = (categorySlug, newPage = 0) => {
    setSelectedCategory(categorySlug);

    const skip = newPage * limit;
    fetch(
      `https://dummyjson.com/products/category/${categorySlug}?limit=${limit}&skip=${skip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
        setPage(newPage);
      })
      .catch((err) => console.error("Error fetching products:", err));
  };

  // ✅ Apply sorting (client-side)
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900">
       <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-indigo-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🛍️ Product Store
          </motion.h1>
        </div>
      </header>
    <div className="p-6">
      {/* Category Filter */}
      <FilterBar categories={categories} onFilter={(cat) => handleFilter(cat, 0)} />

      {/* Sorting */}
      <SortBar sortOption={sortOption} onSortChange={setSortOption} />

      {/* Products */}
      <ProductGrid products={sortedProducts} onSelect={setSelected} />

      {/* Pagination */}
      {products.length > 0 && (
        <Pagination
          page={page}
          totalPages={Math.ceil(total / limit)}
          onPageChange={(newPage) =>
            handleFilter(selectedCategory, newPage)
          }
        />
      )}

      {/* Product Detail Modal */}
      {selected && (
        <ProductDetailModal
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
      <footer className="bg-white shadow-inner mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Product Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
