import React from "react";
import { TeaLot } from "../types/tea";

/**
 * データテーブルセクション
 * @param data - 茶葉ロット配列
 */
export const TableSection: React.FC<{ data: TeaLot[] }> = ({ data }) => (
  <div className="mb-12 flex justify-center">
    <div className="w-full max-w-3xl">
      <h3 className="text-lg font-semibold text-[#1a2e05] mb-4 mt-8 text-center">
        データテーブル
      </h3>
      <div className="bg-white rounded-xl shadow pl-8 pr-8 pt-6 pb-8 overflow-x-auto">
        <div className="min-w-[700px]">
          <table className="w-full bg-[#f8f5ee] border border-matcha rounded-xl text-[#222]">
            <thead>
              <tr className="bg-matcha">
                <th className="px-4 py-4 border-b text-left text-[#1a2e05]">ID</th>
                <th className="px-4 py-4 border-b text-left text-[#1a2e05]">種類</th>
                <th className="px-4 py-4 border-b text-left text-[#1a2e05]">含水率 (%)</th>
                <th className="px-4 py-4 border-b text-left text-[#1a2e05]">色スコア</th>
                <th className="px-4 py-4 border-b text-left text-[#1a2e05]">香りスコア</th>
                <th className="px-4 py-4 border-b text-left text-[#1a2e05]">日付</th>
              </tr>
            </thead>
            <tbody>
              {data.map((lot, index) => (
                <tr key={index} className={`hover:bg-matcha transition-colors tr-hover ${index % 2 === 0 ? 'bg-[#f3ede2]' : 'bg-[#f8f5ee]'}`}>
                  <td className="px-4 py-3 border-b text-[#222] font-medium">{lot.id}</td>
                  <td className="px-4 py-3 border-b text-[#222] font-medium">{lot.type_}</td>
                  <td className="px-4 py-3 border-b text-[#222] font-medium">{lot.moisture}</td>
                  <td className="px-4 py-3 border-b text-[#222] font-medium">{lot.color}</td>
                  <td className="px-4 py-3 border-b text-[#222] font-medium">{lot.aroma}</td>
                  <td className="px-4 py-3 border-b text-[#222] font-medium">{lot.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
); 