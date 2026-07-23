export interface SoundAsset {
  name: string;
  dataUri: string;
  duration: number;
  format: "mp3" | "wav" | "ogg" | "webm";
  license: string;
  author: string;
}
