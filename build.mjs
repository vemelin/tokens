import fs from 'fs';
import path from 'path';
import StyleDictionary from 'style-dictionary';

// Paths
const metadataPath = './input/$metadata.json';
const tokensDir = './input/';
const outputDir = './build/';

console.log('Full path:', path.resolve(metadataPath));

// Load $metadata.json
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
const tokenSetOrder = metadata.tokenSetOrder;

tokenSetOrder.map(item => console.log(`${tokensDir}` + `${item}.json`));

const sd = new StyleDictionary({
  source: tokenSetOrder.map((set) => path.join(tokensDir, `${set}.json`)),
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: path.join(outputDir, 'scss/'),
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: path.join(outputDir, 'css/'),
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

// Extend and Build
// await StyleDictionary.extend(config).buildAllPlatforms();
await sd.buildAllPlatforms();

console.log('Build complete!');