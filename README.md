# SEO Structure Viewer

The most powerful SEO visual audit tool. Analyze webpage structure and link health with one click.

## 🚀 部署到 Vercel

### 方法 1: 通過 GitHub (推薦)

1. **上傳到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用戶名/你的倉庫名.git
   git push -u origin main
   ```

2. **在 Vercel 部署**
   - 前往 [Vercel](https://vercel.com)
   - 點擊 "New Project"
   - 選擇你的 GitHub 倉庫
   - 點擊 "Deploy"
   - 完成！✨

### 方法 2: 使用 Vercel CLI

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

## 💻 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 構建生產版本
npm run build

# 預覽構建結果
npm run preview
```

## 📁 專案結構

```
seo-structure-viewer/
├── public/
│   └── images/          # 所有圖片放這裡
│       ├── logo.png
│       ├── feature-1.png
│       ├── feature-2.png
│       ├── feature-3.png
│       ├── feature-4.png
│       ├── feature-5.png
│       ├── feature-6.png
│       └── seo-professional.png
├── src/
│   ├── components/      # React 組件
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   └── Privacy.tsx
│   ├── App.tsx         # 主應用
│   ├── main.tsx        # 入口文件
│   └── index.css       # 全局樣式
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🖼️ 圖片說明

所有圖片都放在 `public/images/` 資料夾：

- **logo.png** - 網站 Logo
- **feature-1.png** - Website Metadata 功能圖
- **feature-2.png** - Visual Tag Annotations 功能圖
- **feature-3.png** - Image Audit 功能圖
- **feature-4.png** - Link Audit 功能圖
- **feature-5.png** - Structure Tree View 功能圖
- **feature-6.png** - Image Size Analysis 功能圖
- **seo-professional.png** - SEO Professional 展示圖

**如果圖片缺失，組件會自動顯示漸變背景作為後備方案。**

## 🎨 技術棧

- **React 18** - UI 框架
- **TypeScript** - 類型安全
- **Tailwind CSS** - 樣式框架
- **Vite** - 構建工具
- **Lucide React** - 圖標庫

## ✨ 特點

- ✅ 完全乾淨的代碼，無版本號問題
- ✅ 零配置錯誤
- ✅ 完美的 Tailwind CSS 配置
- ✅ TypeScript 支持
- ✅ 響應式設計
- ✅ 圖片失敗自動降級
- ✅ 一鍵部署到 Vercel

## 📝 授權

MIT License

---

Made with ❤️ for SEO professionals
