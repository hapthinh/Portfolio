import assert from "node:assert/strict";
import test from "node:test";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

test("renders the capybara loading scene with accessible status semantics", async (t) => {
  const vite = await createServer({ server: { middlewareMode: true } });
  t.after(() => vite.close());

  const { default: LiquidLoader } = await vite.ssrLoadModule(
    "/src/components/LiquidLoader/LiquidLoader.jsx",
  );
  const markup = renderToStaticMarkup(createElement(LiquidLoader));

  assert.match(markup, /role="status"/);
  assert.match(markup, /aria-label="Loading portfolio"/);
  assert.match(markup, /class="[^"]*capybara[^"]*"/);
  assert.match(markup, /class="[^"]*loaderLine[^"]*"/);
});
