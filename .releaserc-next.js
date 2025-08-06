import writerOpts from './tools/semantic-release/writer-opts.js';
import { commitTypes, releaseRules } from './tools/semantic-release/config.js';

export default {
  branches: [
    {
      name: 'release/0',
      channel: undefined
    },
    {
      name: 'main',
      channel: 'next',
      prerelease: true
    }
  ]
};
