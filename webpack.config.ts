import path from "path";
import webpack from "webpack";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnv) => {
  const mode = env.mode ?? "development";
  const PORT = env.port ?? 3000;
  const isDev = mode === "development";

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
