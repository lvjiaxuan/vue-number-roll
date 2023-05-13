import fs from 'node:fs'
import { URL, fileURLToPath } from 'node:url'


const root = fileURLToPath(new URL('./../', import.meta.url))

{
  let content = fs.readFileSync(`${ root }/dist/index.mjs`, { encoding: 'utf-8' })
  content = 'import \'./index.css\';\n' + content
  fs.writeFileSync(`${ root }/dist/index.mjs`, content, { encoding: 'utf-8' })
}

{
  let content = fs.readFileSync(`${ root }/dist/index.cjs`, { encoding: 'utf-8' })
  content = content.replace('require(\'vue-demi\');', 'require(\'vue-demi\');\nrequire(\'./index.css\')')
  fs.writeFileSync(`${ root }/dist/index.cjs`, content, { encoding: 'utf-8' })
}
