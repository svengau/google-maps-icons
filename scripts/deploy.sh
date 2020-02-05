#!/bin/bash -e

# When we publish to npm, the published files are available in the root
# directory, which allows for a clean include or require of sub-modules.

# Clear the built output
rm -rf lib

# Compile new files
yarn build

# Ensure a vanilla package.json before deploying so other tools do not interpret
# The built output as requiring any further transformation.
node -e "var package = require('./package.json'); \
  delete package.babel; \
  delete package.scripts; \
  delete package.options; \
  package.main = 'bundle.umd.js'; \
  package.browser = 'bundle.umd.js'; \
  package.module = 'index.js'; \
  package['jsnext:main'] = 'index.js'; \
  package['react-native'] = 'index.js'; \
  var fs = require('fs'); \
  fs.writeFileSync('lib/package.json', JSON.stringify(package, null, 2)); \
"

echo "deploying to npm…"
(cd lib && yarn publish) || (>&2 echo "If this failed with ENEEDAUTH, remember that 'yarn deploy' won't work because yarn hot-patches npm's registry to yarn pkg.com")
