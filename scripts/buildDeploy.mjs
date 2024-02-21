import fsp from 'node:fs/promises'
import process from 'node:process'
import { $ } from 'execa'

async function main() {
  await Promise.all([
    $`nr -C=playgrounds/vue3 build`,
    $`nr -C=playgrounds/vue2 build`,
  ])

  await Promise.all([
    fsp.cp('./playgrounds/vue3/dist', './dist', { recursive: true }),
    fsp.cp('./playgrounds/vue2/dist', './dist/vue2', { recursive: true }),
  ])

  process.exit(0)
}

try {
  main()
}
catch (e) {
  console.error(e)
  process.exit(1)
}
