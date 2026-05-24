# Inori Blog

Inori 的个人博客，基于 Astro 构建，部署于 Cloudflare Pages。

## 新增文章

在 `src/content/blog/` 下新建一个 `.md` 文件：

```yaml
---
title: "文章标题"
date: 2026-05-25
category: "思考"
readingTime: 5
summary: "一句话摘要"
---

文章正文...
```

push 到 `main` 分支后，Cloudflare Pages 自动构建部署。

## 本地开发

```bash
pnpm install
pnpm dev
```
