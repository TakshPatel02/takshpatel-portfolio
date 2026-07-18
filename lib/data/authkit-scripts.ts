interface Script {
    script: string;
    js: string;
    ts: string;
}

export const AuthkitScripts: Script[] = [
  { script: "dev", js: "node --watch index.js", ts: "tsx watch src/index.ts" },
  { script: "build", js: "—", ts: "tsc" },
  { script: "start", js: "node index.js", ts: "node dist/index.js" },
];