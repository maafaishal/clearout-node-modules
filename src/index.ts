import { findNodeModules } from "./utils/findNodeModules";
import { deleteFolders } from "./utils/deleteFolders";

export async function main(
  targetPath: string,
  options?: { isRecursive: boolean }
) {
  try {
    const { isRecursive = false } = options || {};

    const nodeModulesPaths = await findNodeModules(targetPath, isRecursive);

    await deleteFolders(nodeModulesPaths);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    console.log("❌", errorMessage);
  }
}

export default main;
