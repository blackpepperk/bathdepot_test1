import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md border border-gray-100">
      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {product.note && (
          <div className="mb-3 w-fit rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
            {product.note}
          </div>
        )}
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-0.5 text-amber-400">
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
            <Star className="h-3 w-3 fill-current" />
          </div>
        </div>

        <p className="mb-6 text-sm text-gray-500 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
          >
            <span>구매하러 가기</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
