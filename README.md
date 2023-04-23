# eslint-config

Opinionated eslint config for typescript driven nodejs and frontend projects

## Installation

```
npm i -D @safestack/eslint-config

yarn add --dev @safestack/eslint-config

pnpm install --dev @safestack/eslint-config
```

Create a `.eslintrc.js` file in the root directory of your project and add the following content:

```javascript
const baseConfig = require('@safestack/eslint-config')

module.exports = baseConfig
```
