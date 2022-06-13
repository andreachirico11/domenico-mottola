/** @type {import('next').NextConfig} */
const fs = require('fs')
let version = 0
try {
  version = JSON.parse(fs.readFileSync('./version.json', 'utf8')).number
} catch (error) {
  console.error('NO VERSION FILE')
}

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_VERSION: version,
  },
}
