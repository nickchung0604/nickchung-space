# nickchung.space 个人网站 — 维护说明

> 这份文档给未来的 Codex / Claude / 维护者看。读完就知道网站怎么搭的、内容在哪改、怎么上线。
> 最后更新：2026-07-19

## 一句话总览

Astro 静态网站，托管在 Vercel，GitHub 自动部署。**所有文字内容集中在 `src/data/site.ts` 一个文件里**，改内容只动这一个文件，改完推 GitHub 自动上线。

---

## 1. 项目信息

| 项 | 值 |
|---|---|
| 线上地址 | https://nickchung.space |
| 本地项目 | `/Users/nc/Documents/nickchung-space/` |
| 技术栈 | Astro 4（静态生成）+ Vercel（托管）+ GitHub（代码+自动部署）|
| 内容文件 | `src/data/site.ts`（**唯一常改的文件**）|
| 主题 | 深色 + 蓝色（`--color-accent: #3b82f6`）|
| 用途 | 英文个人网站，外企供应链/采购求职 |
| GitHub | https://github.com/nickchung0604/nickchung-space |
| Vercel | https://vercel.com/personal-web-site1/nickchung-space |
| 阿里云 DNS | https://dnsnext.console.aliyun.com/authoritative/domains/nickchung.space |

---

## 2. 核心架构：内容 与 外壳 分离

网站拆成两部分：

- **内容**（名字、经历、联系方式等文字）→ 全部放 `src/data/site.ts`
- **外壳**（页面布局、颜色、排版）→ `.astro` 页面模板，固定不动，自动读取内容填进去

改简历正文不用重新设计简历模板 —— 同理，改 `site.ts` 不用碰任何排版代码。

### 修改链条（单一）

```
改 src/data/site.ts
  → 本地 npm run dev 预览
  → git push
  → Vercel 自动部署（1-2 分钟）
  → 线上更新
```

---

## 3. 文件分工

```
nickchung-space/
├── src/
│   ├── data/
│   │   └── site.ts          ★ 内容仓库（改内容只动这里）
│   ├── pages/                页面模板（4 个页面）
│   │   ├── index.astro       首页
│   │   ├── about.astro       关于
│   │   ├── experience.astro  经验
│   │   └── contact.astro     联系方式
│   ├── layouts/
│   │   └── Layout.astro      公共框架（顶栏导航 + 底部版权，所有页面共用）
│   └── styles/
│       └── global.css        外观设置（颜色、字体、间距统一在这里）
├── public/
│   └── profile.jpg           头像照片（首页 + 网页标签图标）
├── astro.config.mjs          配置（正式网址声明）
└── package.json              依赖与命令
```

**改内容 = 只动 `src/data/site.ts`**
**改外观/颜色 = 动 `src/styles/global.css`**
**换头像 = 覆盖 `public/profile.jpg`（文件名不变）**

---

## 4. site.ts 的 9 个数据块

`src/data/site.ts` 导出 9 个常量，分别管：

| 导出名 | 类型 | 管什么 | 用在哪个页面 |
|---|---|---|---|
| `site` | 对象 | 基本信息（名字、头衔、邮箱、LinkedIn、GitHub、地点、头像、自我介绍）| 全部页面 |
| `highlights` | 数组 | 首页 "Key Numbers"（$220M+、20年等数字卡）| 首页 |
| `timeline` | 数组 | 工作经历时间线 | About 页 |
| `skills` | 数组 | 技能分类 | About 页 |
| `projects` | 数组 | 重点项目（含分条要点 highlights）| Experience 页 |
| `education` | 数组 | 教育背景 | About 页 |
| `certifications` | 数组 | 证书 | About 页 |
| `awards` | 数组 | 奖项 | About 页 |
| `nav` | 数组 | 顶部导航菜单 | 全部页面（Layout）|

`site` 对象内的字段：
- `name`、`title`、`tagline`（首页大标题区）
- `email`、`linkedin`、`github`、`location`（Contact 页）
- `profileImage`（头像路径）
- `current`：首页 "Currently" 区块的 `role`（职位）+ `desc`（自我介绍段落）

---

## 5. 按场景修改

### 场景 A：改任何文字内容（最常见）
只改 `src/data/site.ts`，照着已有格式改值即可。

**加一段工作经历**：在 `timeline` 数组里复制一条，改成新内容：
```ts
{
  period: "202X.X — Present",
  role: "职位名",
  company: "公司名",
  description: "描述...",
  tags: ["标签1", "标签2"],
},
```

**改邮箱/LinkedIn**：改 `site` 对象里对应字段。

### 场景 B：换头像照片
把新照片命名为 `profile.jpg`，覆盖 `public/profile.jpg`。

### 场景 C：改颜色主题
改 `src/styles/global.css` 开头的 CSS 变量：
- `--color-accent: #3b82f6`（主色，当前蓝色）
- `--color-bg: #0f1115`（背景，当前深色）
- 改完所有页面自动跟着变

### 场景 D：改某一页的排版/布局
动对应 `src/pages/xxx.astro` 文件（通常不用碰）。

---

## 6. 已知：写死在页面里、不在 site.ts 的内容

以下副标题目前直接写在各自页面文件里（未搬进数据仓库），改它们要动 `.astro` 文件：

| 内容 | 文件位置 |
|---|---|
| About 页副标题 | `src/pages/about.astro` 的 `page-subtitle` |
| Experience 页副标题 | `src/pages/experience.astro` 的 `page-subtitle` |
| Contact 页副标题 | `src/pages/contact.astro` 的 `page-subtitle` |

首页的所有内容（含自我介绍）已全部在 `site.ts` 里。若要彻底统一，可把上面三条也搬进 `site.ts`，做法参考首页 `current` 字段。

---

## 7. 发布上线流程

改完内容走三步（在自己的终端里，npm 直接可用；非登录 shell 需先 `export PATH="/usr/local/bin:$PATH"`）：

```bash
cd /Users/nc/Documents/nickchung-space

# 1. 本地预览（改 site.ts 时页面实时刷新）
npm run dev          # 然后浏览器打开 http://localhost:4321

# 2. 推送 GitHub
git add -A
git commit -m "描述改了什么"
git push

# 3. 无需手动操作 —— Vercel 检测到 GitHub 更新会自动重新部署
#    1-2 分钟后 https://nickchung.space 自动更新
```

> 为什么 push 就上线？因为设置了 GitHub 联动：仓库一更新，Vercel 自动触发部署。这是最省心的一步。

可选：本地构建检查（确认没改坏，等同 Vercel 那一步）：
```bash
npm run build        # 成功会显示 "4 page(s) built"
```

---

## 8. 验证网站状态

```bash
# HTTP 应 308 跳转 HTTPS
curl -s -o /dev/null -w "HTTP: %{http_code}\n"  http://nickchung.space

# HTTPS 应 200
curl -s -o /dev/null -w "HTTPS: %{http_code}\n" https://nickchung.space

# www 应跳转到裸域名
curl -sI https://www.nickchung.space | grep -i location
```

期望：HTTP 308，HTTPS 200，www → nickchung.space。

---

## 9. 域名配置（已生效，正常不用动）

- `nickchung.space`（裸域名）= 主域名，绑定 Vercel Production 部署
- `www.nickchung.space` → 307 重定向 → `nickchung.space`
- `nickchung-space.vercel.app` = Vercel 默认域名（可保留）
- SSL 证书：Let's Encrypt，90 天自动续期

阿里云 DNS 记录：
- `@` → A 记录 `76.76.21.21`
- `www` → CNAME `cname.vercel-dns.com`

---

## 10. 本地命令速查

| 命令 | 作用 |
|---|---|
| `npm run dev` | 本地预览（端口 4321，改文件实时刷新）|
| `npm run build` | 构建到 `dist/`（检查是否改坏）|
| `npm run preview` | 预览构建产物 |

---

## 11. 待办（可选增强）
- [ ] 添加 PDF 简历下载（简历源文件：OneDrive/CV/CV_NEW_20251021.docx）
- [ ] 添加微信 QR 码
- [ ] 添加推荐信（BCCI-Kenneth Lau、Electrolux-Carlos Santacruz）
- [ ] 审核 site.ts 英文文案
- [ ] （可选）把 3 个内页副标题也搬进 site.ts，彻底统一
- [ ] （可选）www 重定向从 307 改 308 永久（SEO 略优，当前 307 可用）

---

## 12. 接手须知（给下一个 Codex/Claude）

1. **改内容前先读 `src/data/site.ts`**，所有文字都在那里。
2. **不要改 `.astro` 页面的排版**，除非用户明确要调布局 —— 内容和外壳已分离。
3. **推 GitHub 前先 `npm run build` 验证**没报错。
4. **不要碰 DNS / Vercel 域名设置**，除非网站打不开且确认是域名问题。
5. 用户是编程新手，改完用大白话说明改了什么、怎么验证、怎么上线。
6. 用中文回复。
