

import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard, { Product } from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622879847332-dbfc228ce486')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider glowing-text">Our Products</h1>
          <p className="mt-2 text-lg text-gray-300">Precision Engineered Hydraulic Components</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Download Brochure Section */}
        <AnimatedSection className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Product Catalog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Download our comprehensive product brochure to explore detailed specifications and our full range of hydraulic solutions.
            </p>
            <a
              href="/SKI_HYDRAULIC_Product_Brochure.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span>Download Brochure</span>
            </a>
          </div>
        </AnimatedSection>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <AnimatedSection key={`${product.name}-${index}`}>
              <ProductCard product={product} onViewDetails={handleViewDetails} />
            </AnimatedSection>
          ))}
        </div>
      </main>

      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductsPage;