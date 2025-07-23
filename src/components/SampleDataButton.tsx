import React from "react";

/**
 * サンプルデータ読み込みボタン
 * @param onClick - クリック時のハンドラ
 * @param loading - ローディング状態
 */
export const SampleDataButton: React.FC<{
  onClick: () => void;
  loading: boolean;
}> = ({ onClick, loading }) => (
  <div className="text-center mt-10">
    <button
      className={`group relative px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-deepgreen focus:ring-offset-2 border-2 border-deepgreen bg-gradient-to-r from-matcha to-gold hover:from-gold hover:to-matcha hover:scale-105 active:scale-95 ${loading ? "opacity-60 cursor-not-allowed" : ""} animate-fade-in`}
      onClick={onClick}
      disabled={loading}
    >
      <span className="inline-block align-middle mr-2 transition-transform group-hover:rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 inline-block text-deepgreen">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </span>
      {loading ? "読み込み中..." : "サンプルデータを読み込む"}
    </button>
  </div>
); 