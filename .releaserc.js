import writerOpts from './tools/semantic-release/writer-opts.js';
import { commitTypes, releaseRules } from './tools/semantic-release/config.js';

const skipCommits = process.env.SKIP_COMMIT === 'true';

const pnpmPackageRoots = [
  'projects/element-ng',
  'projects/element-translate-ng',
  'projects/live-preview',
  'projects/charts-ng',
  'projects/native-charts-ng',
  'projects/dashboards-ng',
  'projects/maps-ng',
  'projects/map-styles',
  'projects/element-theme',
  'projects/element-translate-cli'
];

export default {
  branches: [
    {
      name: 'release/+([0-9])?(.{+([0-9]),x}).x',
      range: "${name.replace(/^release\\//g, '')}",
      channel: "${name.replace(/^release\\//g, '')}"
    },
    'main',
    {
      name: 'next',
      channel: 'next',
      prerelease: 'rc'
    }
  ],
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
    ...(skipCommits ? [] : ['@semantic-release/changelog']),
    // Packages to be pushed
    ...pnpmPackageRoots.map(pkgRoot => [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot
      }
    ]),
    // Root package.json only needs version update
    [
      '@anolilab/semantic-release-pnpm',
      {
        npmPublish: false
      }
    ],
    [
      './tools/semantic-release/sync-dist-package-versions.js',
      {
        pkgRoots: pnpmPackageRoots
      }
    ],
    ...(skipCommits
      ? []
      : [
          [
            '@semantic-release/git',
            {
              assets: ['CHANGELOG.md', 'package.json', 'pnpm-lock.yaml', 'projects/*/package.json'],
              message: 'chore(release): ${nextRelease.version}'
            }
          ]
        ]),
    [
      '@semantic-release/github',
      {
        successComment: false
      }
    ]
  ]
};
