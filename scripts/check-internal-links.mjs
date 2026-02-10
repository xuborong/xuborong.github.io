import fs from "node:fs";
import path from "node:path";

const root = path.resolve("dist");
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    if (entry.isFile() && entry.name.endsWith(".html")) htmlFiles.push(fullPath);
  }
}

function routeToPath(route) {
  if (route === "/") return [path.join(root, "index.html")];
  const clean = route.replace(/^\/+/, "").replace(/\/+$/, "");
  return [path.join(root, clean, "index.html"), path.join(root, `${clean}.html`)];
}

walk(root);

const missing = [];
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
  const hrefs = [...content.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);

  for (const href of hrefs) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const route = href.split("#")[0].split("?")[0];
    const candidates = routeToPath(route);
    const exists = candidates.some((candidate) => fs.existsSync(candidate));
    if (!exists) missing.push({ from: file, href });
  }
}

if (missing.length > 0) {
  console.error("Broken internal links found:");
  for (const issue of missing) {
    console.error(`- ${issue.href} in ${issue.from}`);
  }
  process.exit(1);
}

console.log(`Internal link check passed (${htmlFiles.length} HTML files scanned).`);
