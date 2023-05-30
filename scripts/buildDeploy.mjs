import { $ } from 'execa'
import fsp from 'node:fs/promises'

await Promise.all([
  $`nr -C=playgrounds/vue3 build`,
  $`nr -C=playgrounds/vue2.7 build`,
])

await fsp.cp('./playgrounds/vue3/dist', './dist', { recursive: true })
await fsp.cp('./playgrounds/vue2.7/dist', './dist/vue2', { recursive: true })
