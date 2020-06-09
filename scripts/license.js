#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

console.log('run license.js');

const {readFileSync, writeFileSync} = require('fs');
const {join} = require('path');
const _ = require('lodash');

const trim = (str) => trim.trailing(trim.leading(str));
trim.leading = (str) => str.replace(/^[ \t]+/gm, '');
trim.trailing = (str) => str.replace(/[ \t]+$/gm, '');

function abs(...args) {
  return join(__dirname, '..', ...args);
}

const pkg = JSON.parse(readFileSync(abs('package.json')).toString());

const licenses = _.keys({
  ...pkg.dependencies,
  ...pkg.devDependencies,
}).map((pgkName) => {
  const p = abs('node_modules', pgkName);
  const data = JSON.parse(readFileSync(join(p, 'package.json')).toString());

  let licenseText = null;
  ['LICENSE', 'LICENSE.txt', 'LICENSE.md'].some((license) => {
    try {
      licenseText = String(readFileSync(join(p, license)));
      licenseText = trim(licenseText).replace(/(\w|,)(\n)(\w)/gim, '$1 $3');
    } catch (e) {
      if (e.code !== 'ENOENT') {
        console.log(e);
      }
    }

    return !!licenseText;
  });

  if (!licenseText) console.warn(`No license text found for: ${pgkName}`);

  return Object.assign(
    _.pickBy({licenseText}),
    _.pick(data, ['name', 'description', 'homepage', 'license', 'version']),
  );
});

writeFileSync(abs('src/lib/licenses.json'), JSON.stringify(licenses, null, 2));
