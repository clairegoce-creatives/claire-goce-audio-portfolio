/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repoName.endsWith(".github.io");

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGitHubActions && !isUserOrOrgSite ? `/${repoName}` : "");

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
