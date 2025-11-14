import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface Product {
  name: string;
  category: string;
  description?: string;
  specifications?: { name: string; value: string }[];
  size?: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const navigate = useNavigate();

  const handleGetPrice = () => {
    navigate('/contact', { state: { productName: product.name } });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 h-full flex flex-col border border-gray-100 hover:border-cyan-500">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
            <button
                onClick={() => onViewDetails(product)}
                className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-2.5 bg-white text-cyan-600 font-bold rounded-lg text-sm shadow-lg"
            >
                View Details
            </button>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        {product.description && (
            <p className="text-gray-600 mt-2 text-sm flex-grow">
                {product.description}
            </p>
        )}
        {product.size && <p className="text-gray-500 mt-1 text-sm flex-grow">{product.size}</p>}
      </div>
      <div className="p-5 pt-0 border-t border-gray-100 mt-4">
          <button
              onClick={handleGetPrice}
              className="w-full text-center px-4 py-2.5 bg-cyan-500 text-white font-bold rounded-lg transition-all text-sm duration-300 hover:bg-cyan-600"
              >
              Get Best Price
          </button>
      </div>
    </div>
  );
};

export default ProductCard;