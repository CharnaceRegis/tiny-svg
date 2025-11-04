# Tiny SVG

<div align="center">

<img src="./docs/images/logo.png" alt="Tiny SVG Logo" width="120" height="120" />

**A modern, lightning-fast SVG optimizer and code generator**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-SSR-orange.svg)](https://tanstack.com/start)

[Features](#features) · [Quick Start](#quick-start) · [Documentation](#documentation)

</div>

---

## 📖 Overview

**Tiny SVG** is a powerful web application for optimizing SVG files and generating framework-specific code. Built with modern web technologies, it provides a seamless experience for developers and designers working with SVG assets.

### ✨ Key Features

- **🚀 SVG Optimization**: Powered by SVGO with 40+ configurable plugins
- **📦 Code Generation**: Generate React (JSX/TSX), Vue, Svelte, React Native, and Flutter code
- **⚡ Web Workers**: Non-blocking optimization using multi-threaded processing
- **🎨 Visual Preview**: Real-time preview with multiple background styles
- **💾 Persistent Settings**: Your preferences saved across sessions
- **📱 Responsive Design**: Works seamlessly on desktop and mobile
- **🌓 Dark Mode**: Full dark mode support
- **🌍 Internationalization**: Multi-language support (EN, ZH, KO, DE)
- **⚡ Lightning Fast**: Optimized bundle with lazy loading and code splitting

---

## 📸 Screenshots

### Home Page
![Home Page](./docs/images/home.webp)

Simple, intuitive interface to get started quickly.

### Optimize Page
![Optimize Page](./docs/images/optimize.webp)

Powerful optimization tools with real-time preview and code generation.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: >= 18.x
- **pnpm**: >= 9.x (recommended package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tiny-svg.git
cd tiny-svg

# Install dependencies
pnpm install
```

### Development

This is a **pnpm workspace** monorepo. Start the development server:

```bash
# Start all workspace apps (runs in all apps/*)
pnpm dev

# Or start only the web app
pnpm dev:web
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build

Build for production:

```bash
# Build all workspace packages
pnpm build

# Or build only the web app
pnpm --filter web build

# Preview the production build locally
pnpm --filter web serve
```

Build output will be in `apps/web/.output/`:
- `client/` - Static client assets
- `server/` - Server-side code for SSR

### Code Quality

Run linting and formatting:

```bash
# Check and fix issues (runs on entire workspace)
pnpm check

# Type check all packages
pnpm check-types
```

---

## 🏗️ Tech Stack

### Core Framework
- **[TanStack Start](https://tanstack.com/start)** - Modern SSR framework with file-based routing
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component collection
- **[Iconify](https://iconify.design/)** - Unified icon framework

### Internationalization
- **[Intlayer](https://intlayer.org/)** - Type-safe i18n library for React
- **Languages Supported**: English, Chinese (简体中文), Korean (한국어), German (Deutsch)

### State Management & Data
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Optimization & Processing
- **[SVGO](https://github.com/svg/svgo)** - SVG optimization engine
- **[Prettier](https://prettier.io/)** - Code formatter for generated code
- **[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)** - Multi-threaded processing

### Code Quality
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[Ultracite](https://ultracite.dev/)** - Strict TypeScript configuration

### Build & Deploy
- **[Vite 7](https://vite.dev/)** - Next-generation build tool
- **[Vercel](https://vercel.com/)** - Deployment platform

---

## 📚 Features in Detail

### SVG Optimization

- **40+ SVGO Plugins**: Fine-grained control over optimization
- **Global Settings**: Configure precision, multipass, and prettify options
- **Real-time Preview**: See changes instantly with zoom controls
- **Compression Statistics**: View file size reduction and compression rate
- **Batch Processing**: Optimize multiple SVGs efficiently

### Code Generation

Generate optimized code for your favorite framework:

- **React JSX** - JavaScript components
- **React TSX** - TypeScript components with full type safety
- **Vue** - Single File Components (.vue)
- **Svelte** - Svelte components
- **React Native** - react-native-svg components
- **Flutter** - flutter_svg widgets

### Preview & Visualization

- **4 Background Styles**:
  - Transparent Light (checkerboard)
  - Transparent Dark (dark checkerboard)
  - Solid Light (white)
  - Solid Dark (dark gray)
- **Zoom Controls**: 10% - 200% zoom range
- **Side-by-Side Comparison**: Compare original vs optimized
- **Code Diff View**: Monaco-powered diff editor

### Performance Optimizations

- **Web Workers**: SVGO, Prettier, and code generation run in separate threads
- **Lazy Loading**: Components load on-demand
- **Code Splitting**: Optimized bundle chunking (monaco, prettier, svgo, ui)
- **Result Caching**: Smart LRU cache with 5-minute TTL
- **Optimized Bundle**: Main optimize route only 15.79 KB (97.4% reduction)

---

## 🗂️ Project Structure

```
tiny-svg/
├── apps/
│   └── web/                      # Main web application
│       ├── src/
│       │   ├── components/       # React components
│       │   │   ├── lazy/        # Lazy-loaded wrappers
│       │   │   ├── optimize/    # Optimize page components
│       │   │   └── ui/          # Reusable UI components
│       │   ├── contents/        # i18n content definitions
│       │   │   ├── home.content.ts
│       │   │   ├── about.content.ts
│       │   │   └── optimize.content.ts
│       │   ├── hooks/           # Custom React hooks
│       │   │   ├── use-auto-compress.ts
│       │   │   ├── use-code-generation.ts
│       │   │   ├── use-local-storage.ts
│       │   │   └── ...
│       │   ├── lib/             # Utility functions
│       │   │   ├── svgo-config.ts      # SVGO configuration
│       │   │   ├── svg-to-code.ts      # Code generators
│       │   │   └── worker-utils/       # Worker utilities
│       │   ├── routes/          # File-based routing
│       │   │   └── {-$locale}/  # Locale-based routing
│       │   │       ├── index.tsx    # Home page
│       │   │       ├── about.tsx    # About page
│       │   │       └── optimize.tsx # Optimize page
│       │   ├── store/           # Global state (Zustand)
│       │   └── workers/         # Web Workers
│       │       ├── svgo.worker.ts
│       │       ├── code-generator.worker.ts
│       │       └── prettier.worker.ts
│       ├── public/              # Static assets
│       ├── intlayer.config.ts   # i18n configuration
│       └── vite.config.ts       # Vite configuration
├── docs/
│   └── images/                  # Documentation images
├── package.json                 # Root package.json
└── README.md                    # This file
```

---

## 🔧 Configuration

### SVGO Plugins

Configure SVGO optimization through the UI or modify `lib/svgo-plugins.ts`:

```typescript
export const DEFAULT_PLUGINS: SvgoPluginConfig[] = [
  { name: 'removeDoctype', enabled: true },
  { name: 'removeXMLProcInst', enabled: true },
  { name: 'removeComments', enabled: true },
  // ... 40+ plugins
];
```

### Vite Configuration

Customize build settings in `apps/web/vite.config.ts`:

```typescript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          monaco: ['@monaco-editor/react', 'monaco-editor'],
          prettier: ['prettier/standalone', /* ... */],
          svgo: ['svgo'],
          ui: ['@radix-ui/*'],
        },
      },
    },
  },
});
```

---

## 📝 Usage Examples

### Optimizing an SVG

1. **Upload** or **paste** your SVG code
2. **Configure** SVGO plugins in the sidebar
3. **Preview** the optimized result
4. **Download** or **copy** the optimized SVG

### Generating Framework Code

1. Optimize your SVG first
2. Switch to **code generation tabs** (React JSX/TSX, Vue, etc.)
3. **Prettify** the code if needed
4. **Copy** or **download** the generated code

### Customizing Preview

1. Click the **background button** to cycle through styles
2. Use **zoom controls** to adjust preview size
3. Compare **original vs optimized** in side-by-side view

---

## 🚀 Deployment

### Why Vercel Instead of Cloudflare Workers?

This project was initially built for Cloudflare Workers but has been migrated to Vercel due to runtime limitations with MDX content rendering.

**Technical Reasons:**

1. **MDX Runtime Restrictions**: MDX uses `eval()` and `new Function()` to compile and render content at runtime. Cloudflare Workers have strict security policies that prohibit these JavaScript evaluation methods for security reasons.

2. **SSR Failures**: When blog MDX content is processed during Server-Side Rendering (SSR), Cloudflare Workers throw runtime errors due to the `eval()` restriction. This causes the rendering to fall back to Client-Side Rendering (CSR).

3. **SEO Impact**: The fallback to CSR means:
   - Search engines receive empty or incomplete HTML
   - Blog content is not indexed properly
   - Meta tags and Open Graph data are not available during initial page load
   - Page performance scores decrease due to content shifting

4. **Content Security Policy**: Cloudflare Workers enforce a strict Content Security Policy (CSP) that prevents dynamic code execution, which is essential for MDX compilation.

Vercel's Node.js runtime environment fully supports these features, allowing proper SSR for all MDX content, maintaining SEO benefits and optimal performance.

---

### Vercel (Recommended)

This project is configured for Vercel deployment with full SSR support.

#### Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Vercel CLI** (optional): `npm i -g vercel`

#### Quick Deploy

The easiest way to deploy is to connect your GitHub repository to Vercel:

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect the settings and deploy

#### Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Or use the npm script
cd apps/web
pnpm deploy
```

#### Environment Variables

Set environment variables in your Vercel project settings or via CLI:

```bash
# Set a variable
vercel env add VARIABLE_NAME

# Pull environment variables for local development
vercel env pull
```

#### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Vercel will automatically configure DNS

#### Deployment Best Practices

- **Build locally first**: Run `pnpm --filter web build` to catch errors before deploying
- **Test with preview**: Use `pnpm --filter web serve` to test the production build locally
- **Check bundle size**: Monitor `apps/web/.output/public/assets/` to ensure bundles are optimized
- **Preview deployments**: Every push to a branch creates a preview deployment

### Other Platforms

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Docker

```bash
# Build Docker image
docker build -t tiny-svg .

# Run container
docker run -p 3001:3001 tiny-svg
```

### Build Output

After running `pnpm build`, the output structure is:

```
apps/web/.output/
├── public/              # Static assets (served by Vercel)
│   ├── assets/         # JS/CSS bundles
│   │   ├── index-*.js   # Main bundle (~15.79 KB)
│   │   ├── monaco-*.js  # Monaco Editor (~500 KB)
│   │   ├── prettier-*.js # Prettier (~200 KB)
│   │   ├── svgo-*.js    # SVGO (~6 KB)
│   │   └── ui-*.js      # UI components
│   └── ...
└── server/              # SSR server code
    └── index.mjs        # Server entry point
```

**Bundle Optimization**:
- Main route: 15.79 KB (97.4% reduction from 611.74 KB)
- Code splitting: Monaco, Prettier, SVGO, and UI in separate chunks
- Lazy loading: Components load on-demand
- Web Workers: CPU-intensive tasks run in separate threads

---

## TODO

- [ ] upload header block (uploaded after, then reupload)
- [ ] Data URL tab (minified Data URI, base64, encodeURIComponent)
- [ ] SVG share (share name, link expires - need server storage)
- [ ] SVG history (list, use, LocalStorage)
- [ ] SVG Grab move, scale
- [ ] SVG rotation, horizontal flip, vertical flip, width and height adjustment (proportional)
- [ ] SVG setting attrs demo (hover attrs show demo image or motion demo)
- [ ] SVG collection (list, server storage)
- [ ] SVG AI find (AI recognizes SVG images, provides descriptive keywords, and performs searches.)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style

- Follow **Biome** linting rules
- Write **TypeScript** with strict mode
- Use **conventional commits** format
- Add **tests** for new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[SVGO](https://github.com/svg/svgo)** - The powerful SVG optimizer
- **[TanStack](https://tanstack.com/)** - Amazing React ecosystem
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful UI components
- **[Better T Stack](https://better-t-stack.dev/)** - Better Start Template
- **All contributors** who have helped improve this project

## Code Template

- start with same template [tiny-svg start template](https://better-t-stack.dev/stack?name=my-better-t-app&fe-w=tanstack-start&fe-n=none&rt=none&be=none&api=none&db=none&orm=none&dbs=none&au=none&pay=none&pm=pnpm&add=biome%2Cultracite&ex=&git=true&i=true&wd=none&sd=vercel&yolo=false)

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/hehehai/tiny-svg/issues)
- **Discussions**: [GitHub Discussions](https://github.com/hehehai/tiny-svg/discussions)

---

<div align="center">

Made with ❤️ by developers, for developers

**[⬆ Back to Top](#tiny-svg)**

</div>
