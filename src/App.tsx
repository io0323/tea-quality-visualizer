import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { TeaLot } from "./types/tea";
import { GraphSection } from "./components/GraphSection";
import { SummarySection } from "./components/SummarySection";
import { TableSection } from "./components/TableSection";
import { SampleDataButton } from "./components/SampleDataButton";

/**
 * 茶葉品質ビジュアライザーのメインコンポーネント
 */
function App() {
  const [data, setData] = useState<TeaLot[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * サンプルデータを読み込むボタンのハンドラ
   */
  const handleFileSelect = async () => {
    try {
      setLoading(true);
      setError(null);
      // サンプルデータを直接読み込む
      const lots: TeaLot[] = await invoke("analyze_tea_csv", {
        path: "sample_data.csv",
      });
      setData(lots);
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex flex-col items-center justify-start">
      <main className="w-full max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold text-[#1a2e05] mb-12 text-center">
          Tea Quality Visualizer
        </h1>
        {error && (
          <div className="mb-8 p-4 bg-fuji border border-brown text-brown rounded shadow">
            {error}
          </div>
        )}
        {data.length > 0 && <GraphSection data={data} />}
        {data.length > 0 && <SummarySection data={data} />}
        {data.length > 0 && <TableSection data={data} />}
        <SampleDataButton onClick={handleFileSelect} loading={loading} />
      </main>
    </div>
  );
}

export default App;