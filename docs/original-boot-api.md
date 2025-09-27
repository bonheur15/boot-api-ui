# BootApi

**BootApi** is a lightweight, file-based API framework built on top of [Fastify](https://fastify.dev/) and designed to work seamlessly with [Bun](https://bun.sh). It enables you to build backend APIs using a folder-based structure, automatic middleware loading, route-specific config, and built-in caching.

## 🚀 Features

- 📁 **Folder-based Routing** like Next.js
- ⚙️ **Middleware Support** at any folder level
- 🔁 **Per-route Caching** with optional duration
- 🔌 **Fastify under the hood** for performance
- 🔧 **Simple CLI** to scaffold a project (`bunx boot-api`)
- ⚡ **Bun-first** but works with Node.js too

---

## 📦 Installation

```bash
bun add boot-api
```

---

## 🛠️ Usage

### 1. Initialize a new project

```bash
bunx boot-api
```

You’ll be prompted to:

- Enter a project name or choose the current directory
- It will generate the project structure for you

### 2. Start the server

```bash
bun run boot-api.config.ts
```

---

## 🧱 Project Structure

```
my-project/
├── boot-api.config.ts         # Your entry file
├── api/
│   └── demo/
│       └── index.ts          # Route: /api/demo
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 🧭 Routing

Each folder under `api/` becomes a route.

| Path                       | File                                |
| -------------------------- | ----------------------------------- |
| `/api`                     | `api/index.ts`                      |
| `/api/demo`                | `api/demo/index.ts`                 |
| `/api/user/:id`            | `api/user/[id]/index.ts`            |
| `/api/blog/:slug/comments` | `api/blog/[slug]/comments/index.ts` |

---

## ⚙️ Middleware

You can create a `middleware.ts` in any folder inside `api/`:

```ts
// api/middleware.ts (applies to all routes)
export default async function (req, res) {
  console.log("[ROOT]", req.method, req.url);
}

// api/user/middleware.ts (only applies to /api/user/**)
export default async function (req, res) {
  console.log("[USER]", req.url);
}
```

Middleware is automatically chained by folder depth.

---

## 📦 Caching

BootApi supports per-route caching via an optional `config` export:

```ts
// api/quote/index.ts
export const config = {
  cache: {
    enabled: true,
    maxAge: 10000, // in ms (10 seconds)
  },
};

export default async function handler(req, res) {
  return { quote: `Cached at ${Date.now()}` };
}
```

If `enabled` is `true`, the route’s response will be cached in memory.

---

## ✨ CLI Scaffolding

After running `bunx boot-api`, the CLI will create:

- `boot-api.config.ts` – server entry
- `api/demo/index.ts` – test route
- `tsconfig.json`, `.gitignore`, `package.json`

---

## 🧪 Example Route

```ts
// api/hello/index.ts
export default async function handler(req, res) {
  return { hello: "BootApi" };
}
```

---

## 🔌 Under the Hood

- Framework: [Fastify](https://fastify.dev/)
- Runtime: [Bun](https://bun.sh)
- Language: TypeScript-first
- Uses dynamic `import()` to load all routes and middleware recursively

---

## 🧰 Future Features

- Route-level error handling
- Redis/file caching support
- Auto-generated route docs
- Type-safe `req.params` and `req.query`

---

## 🧑‍💻 Contributing

PRs welcome! Feel free to open issues or suggest features.

---
