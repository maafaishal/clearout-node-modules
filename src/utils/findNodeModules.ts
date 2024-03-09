import fs from "fs";
import path from "path";

async function getNodeModules(directoryPath: string, isRecursive: boolean) {
  const list: string[] = [];

  const entries = await fs.promises
    .readdir(directoryPath, {
      withFileTypes: true,
    })
    .catch((error) => {
      if (error.code === "ENOENT") {
        throw new Error("No matches found.");
      }

      return [];
    });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") {
        list.push(path.join(directoryPath, entry.name));
      } else if (isRecursive) {
        const newList = await getNodeModules(
          path.join(directoryPath, entry.name),
          isRecursive
        );
        list.push(...newList);
      }
    }
  }

  return list;
}

export async function findNodeModules(
  targetPath: string,
  isRecursive: boolean
): Promise<string[]> {
  const result = await getNodeModules(targetPath, isRecursive);

  if (!result.length) {
    throw new Error("No matches found.");
  }

  return result;
}
