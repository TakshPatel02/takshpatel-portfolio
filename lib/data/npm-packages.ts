export interface NpmPackage {
    id: string
    name: string
    description: string
    installCmd: string
    npmUrl: string
    githubUrl: string
}

export const NpmPackages: NpmPackage[] = [
  {
    id: "01",
    name: "component-labs",
    description:
      "Open-source React component library with 60+ animated components",
    installCmd: "npm i component-labs",
    npmUrl: "https://www.npmjs.com/package/component-labs",
    githubUrl: "https://github.com/TakshPatel02/ComponentLabs-npm",
  },
  {
    id: "02",
    name: "iconflow",
    description:
      "Lucide React icon wrapper with 6 built-in animation types — drop-in, zero config",
    installCmd: "npm i iconflow",
    npmUrl: "https://www.npmjs.com/package/iconflow",
    githubUrl: "https://github.com/TakshPatel02/IconFlow-npm",
  },
  {
    id: "03",
    name: "create-express-authkit",
    description:
      "CLI to scaffold an Express + MongoDB backend with JWT auth in one command",
    installCmd: "npx create-express-authkit my-app",
    npmUrl: "https://www.npmjs.com/package/create-express-authkit",
    githubUrl: "https://github.com/TakshPatel02/create-express-authkit",
  },
];
