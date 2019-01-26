<template>
  <v-container>
    <!-- <v-toolbar color="primary">
      <v-toolbar-title>React-ing To Vue</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>-->
    <h2 class="display-3">React-ing To Vue</h2>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(section,i) in sections" :key="i">
        <v-icon slot="actions" color="accent">{{ section.icon }}</v-icon>

        <div slot="header" class="headline">{{ section.text }}</div>
        <v-card>
          <v-card-text>
            <code class="code-react">
              import Vue from 'vue';
              import App from './App';
              &nbsp;
              new Vue({
              el: '#app',
              render: createElement => createElement(App),
              });
            </code>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
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
code {
  background-color: #000;
  display: block;
}

code.code-react {
  color: rgb(0, 121, 191);
}
</style>
