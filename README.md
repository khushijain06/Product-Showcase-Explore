# 🛍️ Product Showcase Explorer  

A **responsive interactive product explorer** built for the **Razorpod Frontend Developer take-home assignment**.  
It fetches data from the **DummyJSON Products API**, allowing users to **browse, filter, sort, and view product details** with smooth animations powered by **Framer Motion**.  

---

## 🚀 Live Demo & Source  

- **Live App**: [Deployed on Vercel/Netlify]  
- **Source Code**: https://github.com/khushijain06/Product-Showcase-Explore  

---

## 📌 Features  

### ✅ Core Requirements  
- **Fetch & Display Products**  
  - Products fetched from DummyJSON API.  
  - Displayed in a **responsive grid** of product cards (image, title, price).  
  - Pagination with `limit + skip` for navigation.  

- **Product Detail View**  
  - Click on a card to open a **detail modal/section**.  
  - Shows **description, rating, stock, brand, category, and multiple images**.  

- **Filtering by Category**  
  - Categories dynamically fetched from API.  
  - Filter bar with clickable options.  

- **Sorting**  
  - Sort products by:  
    - Price (ascending/descending)  
    - Title (A–Z / Z–A)  

- **Loading & Error States**  
  - Skeleton loader/spinner while fetching.  
  - Graceful error message on failure.  

- **Responsiveness**  
  - Fully responsive across **mobile, tablet, desktop** using **Tailwind CSS**.  

---

## 🎬 Animation Requirements  

- **List Item Appearance**:  
  - Staggered **fade/slide-in** animation using Framer Motion.  

- **Detail View Transition**:  
  - Smooth **modal fade + slide-in**.  

- **Micro-Interactions**:  
  - Hover scaling & subtle button animations.  

---

## 🛠️ Tech Stack  

- **Framework**: React (Vite)
- **Language**: T JavaScript 
- **Styling**: Tailwind CSS  
- **Animations**: Framer Motion  
- **Data Fetching**: Fetch API  

---

## 🔥 Bonus Sections 

Advanced Animations: Staggered fade-in grid cards, smooth spring animation on detail view, hover scale & button press effects
