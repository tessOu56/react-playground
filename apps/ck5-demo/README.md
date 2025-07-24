# CKEditor 5 React Demo

此專案展示如何在現代 React 應用中整合 **CKEditor 5 富文本編輯器**。

---

## 🚀 技術棧

* **React 19.1.0** - 最新版本
* **TypeScript 5.8.3** - 類型安全
* **Vite 7.0.5** - 快速建構工具
* **Tailwind CSS 4.1.11** - 實用優先 CSS
* **CKEditor 5 build-classic 44.3.0** - 官方預設建構版
* **pnpm** - 包管理器

---

## 🛠️ 安裝與運行

### 前置需求

* Node.js 18+
* pnpm 8+

### 流程

```bash
# 安裝依賴
pnpm install

# 啟動開發伺服器
pnpm dev
````

訪問 `http://localhost:5173` 或 `http://localhost:5174`。

### 建構與預覽

```bash
# 建構生產版本
pnpm build

# 預覽生產版本
pnpm preview
```

-----

## 📁 專案結構

```
ck5-react-playground/
├── src/
│   ├── App.tsx              # 主要 React 組件 (含 CKEditor)
│   ├── main.tsx             # 應用入口
│   └── index.css            # 全局樣式
├── public/                  # 靜態資源
├── index.html               # HTML 模板
├── package.json             # 專案配置
├── vite.config.ts           # Vite 配置
├── tailwind.config.js       # Tailwind CSS 配置
├── postcss.config.js        # PostCSS 配置
├── tsconfig.json            # TypeScript 配置
└── README.md                # 專案說明
```

-----

## 🎯 CKEditor 5 功能

### 已實現

  * **基本文字格式**: 粗體、斜體
  * **標題**: H1 到 H6
  * **連結**: 插入/編輯
  * **列表**: 項目符號/編號
  * **引用**: 區塊引用
  * **縮排**: 文字縮排
  * **表格**: 插入/編輯
  * **復原/重做**: 編輯歷史

-----

## 🐛 常見問題與解決方案

  * **SVG 圖示錯誤**: 請使用 `@ckeditor/ckeditor5-build-classic`。
  * **PostCSS 錯誤**: 安裝 `@tailwindcss/postcss` 並更新 PostCSS 配置。
  * **授權錯誤**: 使用 `licenseKey: 'GPL'` 並僅限開源功能。
  * **端口被佔用**: 使用 Vite 顯示的新網址。

-----

## 📄 授權

本專案程式碼採用 **MIT 授權**。

CKEditor 5 本身遵循 **GPL 授權**。請參考相關文件了解詳細資訊。

-----

**注意**: 此為演示專案，用於學習和測試。應用於生產環境前請務必了解相關授權要求。