'use client';

import React, { useState } from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

const PetStoreWeb = () => {
  const [cartCount, setCartCount] = useState(0);

  // 模擬從資料庫抓取的商品資料
  const products = [
    { 
      id: 1, 
      name: "CIAO 4入肉泥", 
      price: 38, 
      image: "https://down-tw.img.susercontent.com/file/tw-11134207-7r98z-lyal6n4kz0fodf.webp", 
      tag: "熱銷" 
    },
    { 
      id: 2, 
      name: "超凝結豆腐砂 6入", 
      price: 1100, 
      image: "/api/placeholder/400/300",
      tag: "免運" 
    },
    { 
      id: 3, 
      name: "寵物智能飲水機", 
      price: 890, 
      image: "/api/placeholder/400/300",
      tag: "新品" 
    },
    { 
      id: 4, 
      name: "貓薄荷小魚抱枕", 
      price: 150, 
      image: "/api/placeholder/400/300",
      tag: null 
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* 1. 手機版頂部導航 (Mobile Header) */}
      <div className="bg-white sticky top-0 z-50 shadow-sm px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-2">
  {/* 新增這行：LOGO 圖片 */}
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img src="https://drive.google.com/file/d/1HY9HDPHAuGYieDGuMylgJC5LtvejWnAG/view?usp=drive_link" alt="Logo" className="h-8 w-auto" /> 
  
  <h1 className="font-bold text-xl text-indigo-600">小搗蛋鬼の王國</h1>
</div>
        <div className="relative">
          <ShoppingBag className="text-gray-600" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* 2. 搜尋欄 */}
      <div className="p-4 bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="搜尋飼料、罐頭、玩具..." 
            className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* 3. 行銷輪播區 (Banner) */}
      <div className="mx-4 mt-2 bg-indigo-600 rounded-xl p-6 text-white mb-6">
        <h2 className="text-2xl font-bold mb-2">歡慶開幕 🎉</h2>
        <p>全館滿 $1000 免運費</p>
        <p className="text-sm opacity-80 mt-1">輸入代碼: LOVEPET</p>
      </div>

      {/* 4. 商品網格 (Product Grid) */}
      <div className="px-4">
        <h3 className="font-bold text-lg mb-4 text-gray-800">人氣推薦</h3>
        <div className="grid grid-cols-2 gap-4">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                {product.tag && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h4 className="font-medium text-sm text-gray-700 line-clamp-2 mb-1">{product.name}</h4>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-bold text-indigo-600">${product.price}</span>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="bg-indigo-100 text-indigo-600 p-1.5 rounded-full hover:bg-indigo-200"
                  >
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 5. 底部導航列 (Bottom Tab Bar) */}
      <div className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 text-xs text-gray-500">
        <div className="flex flex-col items-center text-indigo-600">
          <span className="text-lg">🏠</span>
          <span>首頁</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg">🔍</span>
          <span>分類</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg">🧾</span>
          <span>訂單</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg">👤</span>
          <span>會員</span>
        </div>
      </div>
    </div>
  );
};

export default PetStoreWeb;