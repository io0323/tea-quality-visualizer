import React from "react";
import { TeaLot } from "../types/tea";

/**
 * データ概要セクション
 * @param data - 茶葉ロット配列
 */
export const SummarySection: React.FC<{ data: TeaLot[] }> = ({ data }) => (
  <div className="mb-12 flex justify-center">
    <div className="w-full max-w-3xl">
      <h3 className="text-lg font-semibold text-[#1a2e05] mb-4 mt-8 text-center">
        データ概要
      </h3>
      <div className="bg-white rounded-xl shadow pl-8 pr-8 pt-6 pb-8">
        <div className="relative overflow-visible w-full" style={{ minWidth: 700 }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 overflow-visible justify-center">
            <div className="bg-matcha p-6 rounded-xl shadow card-hover flex flex-col items-center">
              <div className="text-[#555] mb-1">総ロット数</div>
              <div className="text-2xl font-bold text-[#1a2e05]">{data.length}</div>
            </div>
            <div className="bg-gold p-6 rounded-xl shadow card-hover flex flex-col items-center">
              <div className="text-[#555] mb-1">平均含水率</div>
              <div className="text-2xl font-bold text-[#1a2e05]">
                {(data.reduce((sum, lot) => sum + lot.moisture, 0) / data.length).toFixed(1)}%
              </div>
            </div>
            <div className="bg-fuji p-6 rounded-xl shadow card-hover flex flex-col items-center">
              <div className="text-[#555] mb-1">平均色スコア</div>
              <div className="text-2xl font-bold text-[#1a2e05]">
                {(data.reduce((sum, lot) => sum + lot.color, 0) / data.length).toFixed(0)}
              </div>
            </div>
            <div className="bg-lightbrown p-6 rounded-xl shadow card-hover flex flex-col items-center">
              <div className="text-[#555] mb-1">平均香りスコア</div>
              <div className="text-2xl font-bold text-[#1a2e05]">
                {(data.reduce((sum, lot) => sum + lot.aroma, 0) / data.length).toFixed(0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
); 