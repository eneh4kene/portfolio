const tsNode = require('ts-node');
const path = require('path');

tsNode.register({
  compilerOptions: {
    target: 'ES2020',
    module: 'commonjs'
  },
  project: path.join(__dirname, 'tsconfig.json')
});

require('./prisma/seed.ts'); 