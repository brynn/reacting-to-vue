<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(section,i) in sections" :key="i">
      <v-icon slot="actions" color="primary">{{ section.icon }}</v-icon>

      <div slot="header">{{ section.text }}</div>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  name: 'ReactingToVueTutorial',
  data: () => ({
    sections: [
      { text: 'Introduction', icon: 'subject' },
      { text: 'Create App', icon: 'create' },
      { text: 'Root Instance', icon: 'settings' },
      { text: 'Defining Components', icon: 'note_add' },
      { text: 'Lifecycle Methods', icon: 'refresh' },
      { text: 'Rendering HTML', icon: 'code' },
      { text: 'Binding Data to HTML', icon: 'settings_input_component' },
      { text: 'Event Handling', icon: 'settings_input_antenna' },
      { text: 'Properties & More', icon: 'more_horiz' },
    ],
  }),
};
</script>

<style>
</style>
