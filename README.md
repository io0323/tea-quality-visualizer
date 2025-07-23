# Tea Quality Visualizer

茶葉品質ビジュアライザー

---

## 概要

このアプリは、茶葉ロットの品質データ（含水率・色・香りなど）を可視化・分析するためのデスクトップアプリケーションです。
Tauri + React + TypeScript + Tailwind CSS + Recharts を用いて構築されています。

---

## 技術スタック

- **Tauri**: クロスプラットフォームデスクトップアプリ（Rustバックエンド）
- **React**: UI構築
- **TypeScript**: 型安全なフロントエンド開発
- **Tailwind CSS**: ユーティリティファーストCSSフレームワーク
- **Recharts**: データ可視化（グラフ描画）
- **Vite**: 高速ビルドツール
- **PostCSS / Autoprefixer**: CSSビルド

---

## セットアップ手順

1. **リポジトリのクローン**

```sh
git clone https://github.com/io0323/tea-quality-visualizer.git
cd tea-quality-visualizer
```

2. **依存関係のインストール**

```sh
npm install
```

3. **開発サーバー起動（Tauriデスクトップアプリ）**

```sh
npm run tauri dev
```

---

## ディレクトリ構成

```
tea-quality-visualizer/
├── src/                # フロントエンド（React/TypeScript）
│   ├── App.tsx         # メインコンポーネント
│   ├── App.css         # Tailwind + カスタムCSS
│   ├── components/     # UIコンポーネント群
│   └── types/          # 型定義
├── src-tauri/          # Tauri（Rustバックエンド）
├── public/             # 静的ファイル
├── package.json        # npmスクリプト・依存関係
├── tailwind.config.js  # Tailwind設定
├── postcss.config.cjs  # PostCSS設定
├── vite.config.ts      # Vite設定
└── README.md           # このファイル
```

---

## 主な機能

- CSVデータの読み込み・解析（Tauri経由でRustバックエンドと連携）
- 各ロットの品質データをグラフ・テーブル・サマリーで可視化
- レスポンシブなUI・ダークモード対応

---

## ライセンス

MIT License

---

## 開発・コントリビュート

バグ報告・機能要望・プルリクエスト歓迎です。

---

## 作者

[@io0323](https://github.com/io0323)
