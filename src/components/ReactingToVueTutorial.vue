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
      { text: 'Create App' },
      { text: 'Root Instance' },
      { text: 'Defining Components' },
      { text: 'Lifecycle Methods', icon: 'refresh' },
      { text: 'Rendering HTML', icon: 'code' },
      { text: 'Binding Data to HTML' },
      { text: 'Event Handling' },
      { text: 'Properties & More' },
    ],
  }),
};
</script>

<style>
</style>
