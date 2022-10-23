import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
const reactRefresh = require("@vitejs/plugin-react-refresh");
const { plugin: mdPlugin, Mode } = require("vite-plugin-markdown");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), reactRefresh(), mdPlugin({ mode: [Mode.REACT] })],
});
