import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("site config exposes key homepage content", async () => {
  const content = await readFile(new URL("../src/content/site-config.ts", import.meta.url), "utf8");

  assert.match(content, /Sanjivani International School/);
  assert.match(content, /Admissions open for the 2026-27 academic session\./);
  assert.match(content, /quickStats/);
});

test("navigation contains admissions and contact routes", async () => {
  const content = await readFile(new URL("../src/content/navigation.ts", import.meta.url), "utf8");

  assert.match(content, /"\/admissions"/);
  assert.match(content, /"\/contact"/);
});
