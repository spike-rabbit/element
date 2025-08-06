import writerOpts from './tools/semantic-release/writer-opts.js';
import { commitTypes, releaseRules } from './tools/semantic-release/config.js';

export default {
  branches: [
    {
      name: 'release/+([0-9])?(.{+([0-9]),x}).x',
      channel: "${name.replace(/^release\\//g, '')}"
    },
    'main'
  ]
};
