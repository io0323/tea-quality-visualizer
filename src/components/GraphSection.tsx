import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TeaLot } from "../types/tea";

/**
 * 品質データグラフセクション
 * @param data - 茶葉ロット配列
 */
export const GraphSection: React.FC<{ data: TeaLot[] }> = ({ data }) => (
  <div className="mb-12 flex justify-center">
    <div className="w-full max-w-3xl">
      <h2 className="text-2xl font-bold text-[#1a2e05] mb-8 text-center">
        品質データグラフ
      </h2>
      <div className="bg-white rounded-xl shadow pl-8 pr-8 pt-6 pb-8">
        <div className="w-full" style={{ minWidth: 700 }}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data} margin={{ left: 32, right: 32 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="id" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="moisture" 
                stroke="#16a34a" 
                name="含水率 (%)" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="color" 
                stroke="#a78bfa" 
                name="色スコア" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="aroma" 
                stroke="#a16207" 
                name="香りスコア" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
); 