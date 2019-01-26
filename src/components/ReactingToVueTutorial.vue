<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">React-ing To Vue</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <div class="navigation">
          <md-list>
            <md-list-item>
              <md-icon class="md-primary">subject</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Introduction</md-button>
              </span>
            </md-list-item>
            <md-list-item>
              <md-icon class="md-primary">create</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Step 1: Create App</md-button>
              </span>
            </md-list-item>
            <md-list-item>
              <md-icon class="md-primary">settings</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Step 2: Root Instance</md-button>
              </span>
            </md-list-item>
            <md-list-item>
              <md-icon class="md-primary">note_add</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Step 3: Defining Components</md-button>
              </span>
            </md-list-item>
            <md-list-item>
              <md-icon class="md-primary">refresh</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Step 4: Lifecycle Methods</md-button>
              </span>
            </md-list-item>
            <md-list-item>
              <md-icon class="md-primary">code</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Step 5: Rendering HTML</md-button>
              </span>
            </md-list-item>
            <md-list-item>
              <md-icon class="md-primary">settings_input_component</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Step 6: Binding Data to HTML</md-button>
              </span>
            </md-list-item>
            <md-list-item>
              <md-icon class="md-primary">settings_input_antenna</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Step 7: Event Handling</md-button>
              </span>
            </md-list-item>
            <md-list-item>
              <md-icon class="md-primary">more_horiz</md-icon>
              <span class="md-list-item-text">
                <md-button class="md-accent">Step 8: Properties &amp; More</md-button>
              </span>
            </md-list-item>
          </md-list>
        </div>
      </md-app-drawer>

      <md-app-content>
        <div class="page-container-section">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'ReactingToVueTutorial',
};
</script>

<style>
.navigation {
  padding-top: 5rem;
}

.navigation button {
  text-align: left;
}

.navigation .md-list-item-content > .md-icon:first-child {
  margin-right: 16px;
}
</style>
