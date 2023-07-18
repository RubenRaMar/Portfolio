import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    root: "src",
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["lcov", "text"],
      all: true,
      exclude: [
        "**/*.test.{ts,tsx}",
        "**/setupTests.ts",
        "**/types.ts",
        "**/*.d.ts",
        "**/*.astro",
        "**/utils",
      ],
    },
  },
});
