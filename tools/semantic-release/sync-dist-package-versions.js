/**
 * The version update by semantic-release is not done in the dist packages, so we do this manually.
 */

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const readJson = async file => JSON.parse(await readFile(file, 'utf8'));

const writeJson = async (file, data) => {
  await writeFile(file, `${JSON.stringify(data, null, 2)}\n`);
};

export const prepare = async (pluginConfig, { cwd, logger }) => {
  for (const pkgRoot of pluginConfig.pkgRoots) {
    const sourcePackagePath = path.resolve(cwd, pkgRoot, 'package.json');
    const sourcePackage = await readJson(sourcePackagePath);
    const publishDirectory = sourcePackage.publishConfig?.directory;

    if (!publishDirectory) {
      continue;
    }

    const distPackagePath = path.resolve(cwd, pkgRoot, publishDirectory, 'package.json');
    const distPackage = await readJson(distPackagePath);

    distPackage.version = sourcePackage.version;
    await writeJson(distPackagePath, distPackage);

    logger.log(
      'Synced %s version %s to %s',
      sourcePackage.name,
      sourcePackage.version,
      distPackagePath
    );
  }
};
