import writerOpts from './tools/semantic-release/writer-opts.js';
import { commitTypes, releaseRules } from './tools/semantic-release/config.js';

const skipCommits = process.env.SKIP_COMMIT === 'true';

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
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/element-ng'
      }
    ],
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/element-translate-ng'
      }
    ],
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/live-preview'
      }
    ],
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/charts-ng'
      }
    ],
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/native-charts-ng'
      }
    ],
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/dashboards-ng'
      }
    ],
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/maps-ng'
      }
    ],
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/map-styles'
      }
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'projects/element-theme'
      }
    ],
    [
      '@anolilab/semantic-release-pnpm',
      {
        pkgRoot: 'projects/element-translate-cli'
      }
    ],
    // Root package.json only needs version update
    [
      '@anolilab/semantic-release-pnpm',
      {
        npmPublish: false
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
