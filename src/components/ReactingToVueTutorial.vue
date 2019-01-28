<template>
  <v-container>
    <v-layout align-baseline>
      <v-flex>
        <h2 class="display-3">
          <span class="react font-weight-regular">React→</span>
          <span class="pr-2 font-weight-thin">ing to</span>
          <span class="vue font-weight-regular">→Vue</span>
        </h2>
      </v-flex>
      <v-flex>
        <h6 class="headline font-weight-light">An introductory Vue.js tutorial for React developers</h6>
      </v-flex>
    </v-layout>
    <v-expansion-panel class="mt-4">
      <v-expansion-panel-content v-for="(section,sectionName, i) in sections" :key="i">
        <v-icon slot="actions" color="accent">{{ section.icon }}</v-icon>

        <div slot="header" class="py-2 headline font-weight-regular">{{ section.title }}</div>
        <v-card>
          <v-card-text>
            <div v-if="section.text" v-html="section.text" class="subheading"></div>
            <div v-if="section.code" class="mt-5">
              <div class="react">
                <h5 class="title mb-4">React</h5>

                <div v-for="(file, i) in section.code.react" v-bind:key="i">
                  <h6 class="subheading" v-if="file.filepath">{{ file.filepath }}</h6>
                  <code
                    v-html="file.js"
                    class="pa-4 mt-2 mb-5 elevation-4 blue-grey darken-4 blue-grey--text text--darken-1"
                  ></code>
                </div>
              </div>
              <div class="vue">
                <h5 class="title mb-4">Vue</h5>
                <div v-for="(file, index) in section.code.vue" v-bind:key="index">
                  <h6 class="subheading" v-if="file.filepath">{{ file.filepath }}</h6>
                  <code
                    v-html="file.js"
                    class="pa-4 mt-2 mb-5 elevation-4 blue-grey darken-4 blue-grey--text text--darken-1"
                  ></code>
                </div>
              </div>
            </div>
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
    sections: {
      intro: {
        title: 'Introduction',
        icon: 'subject',
        text: `
          <p>In this tutorial, you'll be making a grocery list app using both <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://vuejs.org/" target="_blank">Vue</a>. In the process of building this (extremely) simple app, you'll learn the major differences between the two frameworks. While far from comprehensive, this tutorial provides an accessible, hands-on introduction to Vue for those not yet familiar with it, assuming at least an intermediate knowledge of React.</p> <p>Before you get started, make sure you have these Chrome extensions installed: <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" target="_blank">React Dev Tools</a> and <a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en" target="_blank">Vue Dev Tools</a>.</p>
          <p>At the end of this tutorial, both versions of your app will look like this (with 'Brynn' replaced by your name):</p><p><img src="/app.png" /></p>`,
      },
      creating: {
        title: 'Create the App',
        icon: 'create',
        text: `<p>First create two new directories on your computer, one for the React app and one for the Vue app. Then use <a href="https://facebook.github.io/create-react-app/ target="_blank">Create React App</a> and <a href="https://cli.vuejs.org/guide/creating-a-project.html#vue-create" target="_blank">Vue Create</a> to initialize both projects with some boilerplate code.</p>`,
        code: {
          react: [
            {
              js: `<span class="new-code">npx create-react-app react-app\ncd react-app\nnpm start</span>`,
            },
          ],
          vue: [
            {
              js: `<span class="new-code">npm install -g @vue/cli\nvue create vue-app\ncd vue-app\nnpm run serve</span>`,
            },
          ],
        },
      },
      mounting: {
        title: 'Mount the Root Instance',
        icon: 'settings',
        text: `<p>Before we can do anything else, we need to tell our app which HTML element will serve as the root of our front-end components. Our React boilerplate gives this element an ID of 'root', while our Vue boilerplate calls it 'app', so we'll mount our React and Vue instances on these divs, respectively.</p>`,
        code: {
          react: [
            {
              filepath: 'src/index.js',
              js: `<span class="new-code">import React from 'react'\nimport ReactDOM from 'react-dom'\nimport App from './App'\n\nReactDOM.render(&lt;App /&gt;, document.getElementById('root'))</span>`,
            },
          ],
          vue: [
            {
              filepath: 'src/main.js',
              js: `<span class="new-code">&lt;script&gt;\nimport Vue from 'vue'\nimport App from './App'\n\nnew Vue({\n  el: '#app',\n  render: createElement => createElement(App)\n})\n&lt;/script&gt;</span>`,
            },
          ],
        },
      },
      components: {
        title: 'Define Components & Render HTML',
        icon: 'note_add',
        text: `<p>Now it's time for the fun stuff! We'll make a component called GroceryList, which will contain all of our app's content and logic. As you'll see in the code snippets below, the major difference between React and Vue is that Vue uses regular HTML inside of a <code style="color: #fff">&lt;template&gt;</code> tag, rather than JSX inside of a render function. After completing this step, both of your apps should display an <code style="color: #fff">&lt;h2&gt;</code> element containing the text 'Groceries'.</p>`,
        code: {
          react: [
            {
              filepath: 'src/App.js',
              js: `<span class="new-code">import React from 'react'
import GroceryList from './components/GroceryList'

const App = () => {
  return (
    &lt;div&gt;
      &lt;GroceryList /&gt;
    &lt;/div&gt;
  )
}

export default App</span>`,
            },
            {
              filepath: 'src/components/GroceryList.js',
              js: `<span class="new-code">import React, { Component } from 'react'

class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }
  render() {
    return (
      &lt;div&gt;
        &lt;h2&gt;Groceries&lt;/h2&gt;
        &lt;ul&gt;&lt;/ul&gt;
      &lt;/div&gt;
    )
  }
}

export default GroceryList</span>`,
            },
          ],
          vue: [
            {
              filepath: 'src/App.vue',
              js: `<span class="new-code">&lt;template&gt;
  &lt;div id="app"&gt;
    &lt;GroceryList /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import GroceryList from './components/GroceryList'

export default {
  name: 'App',
  components: { GroceryList }
}
&lt;/script&gt;</span>`,
            },
            {
              filepath: 'src/components/GroceryList.vue',
              js: `<span class="new-code">&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Groceries&lt;/h2&gt;
    &lt;ul&gt;&lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'GroceryList',
  data: () => ({
    items: []
  })
}
&lt;/script&gt;</span>`,
            },
          ],
        },
      },
      lifecycleMethods: {
        title: 'Use Lifecycle Methods to Load Data',
        icon: 'refresh',
        text: `<p>Our grocery list isn't very useful without anything in it! For the purposes of this tutorial, we won't worry about saving anything to a database; instead, we'll simply declare an array of items at the top of our component. To load these items onto our local state, we'll use lifecycle methods: <code style="color: #29b6f6">componentDidMount()</code> for our React app and <code style="color: #9ccc65">created()</code> for our Vue app.</p>`,
        code: {
          react: [
            {
              filepath: 'src/components/GroceryList.js',
              js: `import React, { Component } from 'react'

<span class="new-code">const groceryList = ['Apple', 'Milk', 'Eggs', 'Spinach', 'Bread']</span>

class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }<span class="new-code">
  componentDidMount() {
    this.setState({ items: groceryList });
  }</span>
  render() {
    return (
      &lt;div&gt;
        &lt;h2&gt;Groceries&lt;/h2&gt;
        &lt;ul&gt;&lt;/ul&gt;
      &lt;/div&gt;
    )
  }
}

export default GroceryList`,
            },
          ],
          vue: [
            {
              filepath: 'src/components/GroceryList.vue',
              js: `&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Groceries&lt;/h2&gt;
    &lt;ul&gt;&lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
<span class="new-code">
const groceryList = ['Apple', 'Milk', 'Eggs', 'Spinach', 'Bread']
</span>
export default {
  name: 'GroceryList',
  data: () => ({
    items: []
  }),<span class="new-code">
  created() {
    this.items = groceryList
  },</span>
}
&lt;/script&gt;`,
            },
          ],
        },
      },
      binding: {
        title: 'Bind Data to HTML',
        icon: 'settings_input_component',
        text: `<p>Now that we have our data on our component state, we need to actually display it! React and Vue bind data to HTML in slightly different ways. Instead of JSX, which can be a bit awkward and unwieldy, Vue uses <a href="https://vuejs.org/v2/api/#Directives target="_blank">directives</a> to transform plain HTML elements into reactive, dynamically changing components that re-render every time their data changes. <code style="color: #9ccc65">v-if</code> and <code style="color: #9ccc65">v-for</code> are both commonly used directives.</p>`,
        code: {
          react: [
            {
              filepath: 'src/components/GroceryList.js',
              js: `import React, { Component } from 'react'

<span class="new-code">const groceryList = ['Apple', 'Milk', 'Eggs', 'Spinach', 'Bread']</span>

class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }
  componentDidMount() {
    this.setState({ items: groceryList })
  }
  render() {
    return (
      <span class="new-code">&lt;div&gt;
        {this.state.items.length ? (
        </span>&lt;div&gt;
          &lt;h2&gt;Groceries&lt;/h2&gt;
          &lt;ul&gt;<span class="new-code">
          {this.state.items.map(item => (
            &lt;li&gt;{item}&lt;/li&gt;
          ))}</span>
          &lt;/ul&gt;
        &lt;/div&gt;<span class="new-code">
        ) : (
            &lt;div&gt;Loading...&lt;/div&gt;
          )}
      &lt;/div&gt;</span>
    )
  }
}

export default GroceryList`,
            },
          ],
          vue: [
            {
              filepath: 'src/components/GroceryList.vue',
              js: `&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Groceries&lt;/h2&gt;<span class="new-code">
    &lt;ul v-if="items.length"&gt;
      &lt;li v-for="item in items"&gt;{{ item }}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div v-else&gt;Loading...&lt;/div&gt;
  </span>&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'GroceryList',
  data: () => ({
    items: []
  }),
  created() {
    this.items = groceryList
  },
}
&lt;/script&gt;`,
            },
          ],
        },
      },
      events: {
        title: 'Handle Events',
        icon: 'settings_input_antenna',
        text: `<p>What good is our grocery list if we can't add anything to it?! Let's add a simple form <code style="color: #fff">&lt;input&gt;</code> and <code style="color: #fff">&lt;button&gt;</code> to our component. You'll notice that Vue uses a directive, <code style="color: #9ccc65">v-model</code>, to directly tie our input's value to a variable, <code style="color: #9ccc65">newItem</code>, on our component state. This allows us to avoid interacting with the DOM (e.g. <code style="color: #29b6f6">event.target.newItem.value</code> in our React code) entirely! Also note that Vue allows us to mutate our data/state object directly, which we do in our form's <code style="color: #9ccc65">handleSubmit()</code> event handler.</p>`,
        code: {
          react: [
            {
              filepath: 'src/components/GroceryList.js',
              js: `import React, { Component } from 'react'

const groceryList = ['Apple', 'Milk', 'Eggs', 'Spinach', 'Bread']

class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
    <span class="new-code">this.handleSubmit = this.handleSubmit.bind(this)</span>
  }
  componentDidMount() {
    this.setState({ items: groceryList })
  }
  <span class="new-code">handleSubmit(event) {
    event.preventDefault()
    const newItem = event.target.newItem.value
    this.setState({ items: [...this.state.items, newItem] })
    event.target.newItem.value = ''
  }</span>
  render() {
    return (
      &lt;div&gt;
        {this.state.items.length ? (
        &lt;div&gt;
          &lt;h2&gt;Groceries&lt;/h2&gt;
          &lt;ul&gt;
          {this.state.items.map(item => (
            &lt;li&gt;{item}&lt;/li&gt;
          ))}
          &lt;/ul&gt;
          <span class="new-code">&lt;form onSubmit={this.handleSubmit}&gt;
            &lt;input type="text" name="newItem" /&gt;
            &lt;button type="submit"&gt;Add Item&lt;/button&gt;
          &lt;/form&gt;</span>
          &lt;/div&gt;
        ) : (
            &lt;div&gt;Loading...&lt;/div&gt;
          )}
      &lt;/div&gt;
    )
  }
}

export default GroceryList`,
            },
          ],
          vue: [
            {
              filepath: 'src/components/GroceryList.vue',
              js: `&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Groceries&lt;/h2&gt;
    &lt;ul v-if="items.length"&gt;
      &lt;li v-for="item in items"&gt;{{ item }}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div v-else&gt;Loading...&lt;/div&gt;
    <span class="new-code">&lt;form @submit.prevent="handleSubmit"&gt;
      &lt;input type="text" name="newItem" v-model="newItem"&gt;
      &lt;button type="submit"&gt;Add Item&lt;/button&gt;
    &lt;/form&gt;</span>
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'GroceryList',
  data: () => ({
    items: [],
    <span class="new-code">newItem: '',</span>
  }),
  created() {
    this.items = groceryList
  },
  <span class="new-code">methods: {
    handleSubmit() {
      this.items.push(this.newItem)
      this.newItem = ''
    },
  },</span>
}
&lt;/script&gt;`,
            },
          ],
        },
      },
      properties: {
        title: 'Pass Down Properties & Compute Properties',
        icon: 'more_horiz',
        text: `<p>By this point, you should have two functioning grocery list apps, one written in React and the other in Vue. Nice! I hope this tutorial has helped you get a sense of their fundamental similarities and differences. This last section illustrates a few more differences involving properties, or 'props' as you probably know them from React. In Vue, we can define <a href="https://vuejs.org/v2/guide/computed.html" target="_blank">computed</a> properties, which are handy for executing logic on data values from our component state. We can achieve the same functionality in React by defining a class method on our component and returning the computed value.</p>`,
        code: {
          react: [
            {
              filepath: 'src/App.js',
              js: `import React from 'react'
import GroceryList from './components/GroceryList'

const App = () => {
  return (
    &lt;div&gt;
      <span class="new-code">&lt;GroceryList owner={'TYPE_YOUR_NAME_HERE'}/&gt;</span>
    &lt;/div&gt;
  )
}

export default App
`,
            },
            {
              filepath: 'src/components/GroceryList.js',
              js: `import React, { Component } from 'react'

const groceryList = ['Apple', 'Milk', 'Eggs', 'Spinach', 'Bread']

class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    <span class="new-code">this.numItems = this.numItems.bind(this)</span>
  }
  componentDidMount() {
    this.setState({ items: groceryList })
  }
  handleSubmit(event) {
    event.preventDefault()
    const newItem = event.target.newItem.value
    this.setState({ items: [...this.state.items, newItem] })
    event.target.newItem.value = ''
  }
  <span class="new-code">numItems() {
    return this.state.items.length
  }</span>
  render() {
    return (
      &lt;div&gt;
        {this.state.items.length ? (
        &lt;div&gt;
          <span class="new-code">&lt;h2&gt;Groceries ({this.numItems()})&lt;/h2&gt;
          &lt;p&gt;For {this.props.owner}&lt;/p&gt;</span>
          &lt;ul&gt;
          {this.state.items.map(item => (
            &lt;li&gt;{item}&lt;/li&gt;
          ))}
          &lt;/ul&gt;
          &lt;form onSubmit={this.handleSubmit}&gt;
            &lt;input type="text" name="newItem" /&gt;
            &lt;button type="submit"&gt;Add Item&lt;/button&gt;
          &lt;/form&gt;
          &lt;/div&gt;
        ) : (
            &lt;div&gt;Loading...&lt;/div&gt;
          )}
      &lt;/div&gt;
    )
  }
}

export default GroceryList`,
            },
          ],
          vue: [
            {
              filepath: 'src/App.vue',
              js: `&lt;template&gt;
  &lt;div id="app"&gt;
    <span class="new-code">&lt;GroceryList v-bind:owner="'TYPE_YOUR_NAME_HERE'"/&gt;</span>
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import GroceryList from './components/GroceryList'

export default {
  name: 'App',
  components: { GroceryList }
}
&lt;/script&gt;`,
            },
            {
              filepath: 'src/components/GroceryList.vue',
              js: `&lt;template&gt;
  &lt;div&gt;
    <span class="new-code">&lt;h2&gt;Groceries ({{ numItems }})&lt;/h2&gt;
    &lt;p&gt;For {{ owner }}&lt;/p&gt;</span>
    &lt;ul v-if="items.length"&gt;
      &lt;li v-for="item in items"&gt;{{ item }}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div v-else&gt;Loading...&lt;/div&gt;
    &lt;form @submit.prevent="handleSubmit"&gt;
      &lt;input type="text" name="newItem" v-model="newItem"&gt;
      &lt;button type="submit"&gt;Add Item&lt;/button&gt;
    &lt;/form&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'GroceryList',
  data: () => ({
    items: [],
    newItem: '',
  }),
  <span class="new-code">props: {
    owner: String,
  },
  computed: {
    numItems: function() {
      return this.items.length
    },
  },</span>
  created() {
    this.items = groceryList
  },
  methods: {
    handleSubmit() {
      this.items.push(this.newItem)
      this.newItem = ''
    },
  },
}
&lt;/script&gt;`,
            },
          ],
        },
      },
    },
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,300i,500,500i');

p {
  max-width: 66%;
  font-size: 20px;
  line-height: 36px;
  margin-bottom: 20px;
}

a:hover {
  color: #fff;
}

.v-expansion-panel__container .headline {
  color: #b0bec5;
}
.v-expansion-panel__container .headline:hover,
.v-expansion-panel__container--active .headline {
  color: #ffffff;
}

code {
  display: block;
  font-size: 100%;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  background-color: #263238!important;
}

p code {
  display: inline-block;
  padding: 0 5px;
}

code:before,
code:after {
  content: '';
}

h2 .react,
.react .title,
.react code .new-code {
  color: #29b6f6;
}
h2 .vue,
.vue .title,
.vue code .new-code {
  color: #9ccc65;
}
</style>
