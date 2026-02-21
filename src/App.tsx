/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingBag } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              추천 상품 모음
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">전체 상품</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">베스트</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">리뷰</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.03]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              엄선된 <span className="text-indigo-600">추천 아이템</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              고객님들의 리뷰가 증명하는 최고의 상품들을 만나보세요.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} 추천 상품 모음. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="hover:text-gray-600 cursor-pointer">이용약관</span>
              <span className="hover:text-gray-600 cursor-pointer">개인정보처리방침</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
