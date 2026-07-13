/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { chain, Rule, schematic, SchematicContext, Tree } from '@angular-devkit/schematics';
import { getPackageJsonDependency } from '@schematics/angular/utility/dependencies';

export const ngAdd = (options: { path: string }): Rule => {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('🔧 Adding @spike-rabbit/element-ng to your project...');

    const hasSimplElementNgDependency = getPackageJsonDependency(tree, '@simpl/element-ng');

    if (hasSimplElementNgDependency) {
      const chainedRules = chain([schematic('simpl-siemens-migration', options)]);
      return chainedRules(tree, context);
    }
  };
};
