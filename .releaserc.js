import writerOpts from './tools/semantic-release/writer-opts.js';
import { commitTypes, releaseRules } from './tools/semantic-release/config.js';

export default {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules,
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE']
        },
        presetConfig: {
          types: commitTypes
        }
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'NOTE', 'DEPRECATED']
        },
        writerOpts
      }
    ],
    '@semantic-release/changelog',
    // Packages to be pushed
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/@spike-rabbit/element-ng'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/@spike-rabbit/element-translate-ng'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/@spike-rabbit/live-preview'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/@spike-rabbit/charts-ng'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/@spike-rabbit/native-charts-ng'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/@spike-rabbit/dashboards-ng'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/element-theme'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/element-translate-cli'
      }
    ],
    // Only update remaining package.json that are not directly published
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/element-ng',
        npmPublish: false
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/element-translate-ng',
        npmPublish: false
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/live-preview',
        npmPublish: false
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/charts-ng',
        npmPublish: false
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/native-charts-ng',
        npmPublish: false
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/dashboards-ng',
        npmPublish: false
      }
    ],
    // Root package.json only needs version update
    // This must be AFTER all other package updates as this will update the peer dependencies.
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json', 'projects/*/package.json'],
        message: 'chore(release): ${nextRelease.version}'
      }
    ],
    '@semantic-release/github'
  ]
};
