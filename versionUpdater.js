const fs = require('fs')
const filePath = 'version.json'

try {
  const versionFile = JSON.parse(fs.readFileSync(filePath))
  versionFile.number = versionFile.number + 1
  fs.writeFileSync(filePath, JSON.stringify(versionFile))
} catch (error) {
  console.log('ERROR UPDATING VERSION: ', error)
}
