# inori-blog/AGENTS.md

Inori 的个人博客，基于 Astro 构建的静态站点，部署于 Cloudflare Pages。

## 项目概述

- **名称**: inori-blog
- **技术栈**: Astro 6 (static mode) + React (build-time only)
- **设计**: 冷调淡紫配色，fork 自 Open Design Atelier Zero 主题
- **部署**: Cloudflare Pages (`wrangler.toml` 配置为 Pages 静态站点，非 Worker)
- **仓库**: emosamastudio/inori-blog (public)

## 边界约束

- 纯静态输出 (`output: 'static'`)，无 SSR/API 路由
- React 仅在构建时使用 (`renderToStaticMarkup`)，不向浏览器发送 React runtime
- 源文件位于 `app/` 目录，构建输出到 `out/`
- 内容使用 Astro Content Collections，Markdown 存放在 `app/content/blog/`
- 不要引入 `src/` 目录，所有代码保持在 `app/` 下
- 不要依赖非 Google 的 Web 字体

## 目录结构

```
app/
├── _components/    # Astro/React 组件 (Header, SEO, Footer 等)
├── _lib/           # 数据层 (catalog, GitHub API)
├── content/        # Content Collections
│   └── blog/       # 博客文章 (.md)
├── pages/          # 路由页面
│   ├── index.astro # 首页
│   ├── blog/       # /blog/ 列表 + /blog/[slug]/ 文章
│   ├── og.astro    # OG 图片生成
│   └── rss.xml.ts  # RSS feed
├── globals.css     # 首页样式
├── sub-pages.css   # 子页面样式
└── i18n.ts         # 国际化文案 (中/英)
public/             # 静态资源 (favicon, logo, robots.txt 等)
```

## 常用命令

```bash
pnpm dev          # 开发服务器 http://127.0.0.1:17574
pnpm build        # 静态构建 → out/
pnpm preview      # 预览构建结果
pnpm typecheck    # TypeScript 类型检查
```

## 自动部署

推送到 `main` 分支后 Cloudflare Pages 自动构建部署。`wrangler.toml` 确保 Cloudflare 将其识别为 Pages 静态站点而非 Worker。

## 注意事项

- `AGENTS.md` 中残留的 Open Design 引用仅存在于 `app/_lib/catalog.ts` 等已不使用的代码路径中，不影响构建
- 类型检查有 44 个错误，主要来自 `catalog.ts` 引用已删除的 content collections，因不影响构建，优先级较低
- 新增博客文章：在 `app/content/blog/` 下创建 `.md` 文件，包含 YAML frontmatter (title, date, category, readingTime, summary)
