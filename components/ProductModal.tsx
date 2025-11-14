
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from './ProductCard';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleInquiry = () => {
    onClose(); // Close modal before navigating
    navigate('/contact', { state: { productName: product.name } });
  };
  
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-800 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Close modal"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </header>

        <div className="flex-grow overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
            </div>
            <div className="flex flex-col">
              {product.description && <p className="text-gray-600 mb-6">Detailed specifications and features for the <strong>{product.name}</strong>. {product.description}</p>}
              
              {product.specifications && product.specifications.length > 0 && (
                <>
                  <h4 className="font-semibold text-gray-700 mb-3">Specifications:</h4>
                  <div className="overflow-x-auto border-t border-b border-gray-200 mb-6">
                      <table className="w-full text-sm">
                          <tbody>
                              {product.specifications.map((spec, index) => (
                                  <tr key={index} className="border-b border-gray-200 last:border-b-0 even:bg-gray-50/50">
                                      <td className="py-3 px-4 font-medium text-gray-600 w-1/3">{spec.name}</td>
                                      <td className="py-3 px-4 text-gray-800">{spec.value}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
                </>
              )}


              {product.size && <p className="text-gray-600 text-sm mb-6"><strong className="text-gray-700">Size:</strong> {product.size}</p>}
              
              <div className="mt-auto">
                <button
                  onClick={handleInquiry}
                  className="w-full py-3 px-6 bg-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>Get Best Price</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
