<script lang="ts" setup>
import { Pane, Splitpanes } from 'splitpanes'
</script>

<template>
  <Splitpanes class="m-1" h-screen w-screen>
    <Pane>
      <PanelPreview />
    </Pane>
    <Pane>
      <Splitpanes horizontal>
        <Pane>
          <PanelVue />
        </Pane>
        <Pane>
          <PanelProps />
        </Pane>
      </Splitpanes>
    </Pane>
  </Splitpanes>
</template>
