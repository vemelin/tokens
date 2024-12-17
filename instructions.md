# Install Dependencies

Install your dependencies with [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
Be careful with using yarn as an alternative, we noticed it handles semver/prereleases tags slightly different, and may result in issues.

```sh
npm init -y && npm install 
```

Then run

```sh
node build.mjs
```

> Note: Make sure to change your "source" property in the config in build-tokens.mjs to not include your package.json, which is not a token file.
