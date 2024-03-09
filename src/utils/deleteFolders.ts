import fs from "fs";

export const deleteFolders = async (paths: string[]) => {
  for (const path of paths) {
    await fs.promises.rm(path, { recursive: true });
    process.stdout.write(`"${path}" is deleted! ✅\n`);
  }
};
